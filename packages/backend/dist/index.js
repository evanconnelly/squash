// packages/backend/src/index.ts
import { RequestSpec } from "caido:utils";
var RATE_LIMIT = {
  requestsPerSecond: 2,
  // Maximum 2 requests per second
  minDelayMs: 500
  // Minimum 500ms between requests
};
var REQUEST_CONFIG = {
  timeoutMs: 3e4,
  // 30 second timeout for requests
  maxRetries: 2
  // Maximum number of retries for failed requests
};
var delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function sendRequestWithTimeout(sdk, spec, retryCount = 0) {
  try {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error(`Request timed out after ${REQUEST_CONFIG.timeoutMs}ms`)), REQUEST_CONFIG.timeoutMs);
    });
    const requestPromise = sdk.requests.send(spec);
    const result = await Promise.race([requestPromise, timeoutPromise]);
    return result;
  } catch (error) {
    if (retryCount < REQUEST_CONFIG.maxRetries) {
      await delay(RATE_LIMIT.minDelayMs);
      return sendRequestWithTimeout(sdk, spec, retryCount + 1);
    }
    throw error;
  }
}
async function compareResponses(original, current) {
  if (original.getCode() !== current.getCode()) {
    return false;
  }
  const originalLength = original.getHeaders()?.["content-length"];
  const currentLength = current.getHeaders()?.["content-length"];
  if (originalLength !== currentLength) {
    return false;
  }
  const originalContentType = original.getHeaders()?.["content-type"];
  const currentContentType = current.getHeaders()?.["content-type"];
  if (originalContentType !== currentContentType) {
    return false;
  }
  const originalBody = original.getBody();
  const currentBody = current.getBody();
  if (originalBody?.length !== currentBody?.length) {
    return false;
  }
  if (originalContentType?.includes("application/json")) {
    try {
      const originalJson = JSON.parse(originalBody?.toString() || "{}");
      const currentJson = JSON.parse(currentBody?.toString() || "{}");
      const originalKeys = Object.keys(originalJson).sort();
      const currentKeys = Object.keys(currentJson).sort();
      if (JSON.stringify(originalKeys) !== JSON.stringify(currentKeys)) {
        return false;
      }
    } catch (e) {
      if (originalBody?.toString() !== currentBody?.toString()) {
        return false;
      }
    }
  }
  return true;
}
function getAllHeaderCombinations(headers) {
  const headerKeys = Object.keys(headers).filter((key) => headers[key] !== void 0);
  const combinations = [];
  for (let i = 1; i <= headerKeys.length; i++) {
    const currentCombination = [];
    generateCombinations(headerKeys, i, 0, currentCombination, combinations);
  }
  return combinations;
}
function generateCombinations(headers, size, start, current, result) {
  if (current.length === size) {
    result.push([...current]);
    return;
  }
  for (let i = start; i < headers.length; i++) {
    const header = headers[i];
    if (header) {
      current.push(header);
      generateCombinations(headers, size, i + 1, current, result);
      current.pop();
    }
  }
}
async function minimizeRequest(sdk, requestId) {
  try {
    const request = await sdk.requests.get(requestId);
    if (!request) {
      return {
        _type: "error",
        message: "Request not found"
      };
    }
    const spec = new RequestSpec("http://localhost:8080");
    const reqData = request.request;
    if (!reqData) {
      return {
        _type: "error",
        message: "Request data not found"
      };
    }
    spec.setMethod(reqData.getMethod());
    spec.setHost(reqData.getHost());
    spec.setPort(reqData.getPort());
    spec.setPath(reqData.getPath());
    spec.setTls(reqData.getPort() === 443);
    const originalHeaders = reqData.getHeaders() || {};
    const originalSpec = new RequestSpec("http://localhost:8080");
    originalSpec.setMethod(reqData.getMethod());
    originalSpec.setHost(reqData.getHost());
    originalSpec.setPort(reqData.getPort());
    const fullUrl = reqData.getUrl();
    const pathAndQuery = fullUrl.substring(fullUrl.indexOf("/", 8));
    originalSpec.setPath(pathAndQuery);
    originalSpec.setTls(reqData.getPort() === 443);
    const body = reqData.getBody();
    if (body) {
      originalSpec.setBody(body);
    }
    Object.entries(originalHeaders).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => originalSpec.setHeader(key, v));
      } else {
        originalSpec.setHeader(key, value);
      }
    });
    await delay(RATE_LIMIT.minDelayMs);
    const originalRequest = await sendRequestWithTimeout(sdk, originalSpec);
    if (!originalRequest.response) {
      return {
        _type: "error",
        message: "Failed to get original response"
      };
    }
    const originalStatusCode = originalRequest.response.getCode();
    if (originalStatusCode < 200 || originalStatusCode >= 300) {
      return {
        _type: "error",
        message: `Original request failed with status code ${originalStatusCode}. Cannot minimize a failing request.`
      };
    }
    const headerCombinations = getAllHeaderCombinations(originalHeaders);
    headerCombinations.sort((a, b) => a.length - b.length);
    let minimalWorkingHeaders = null;
    for (const headerSet of headerCombinations) {
      await delay(RATE_LIMIT.minDelayMs);
      const testSpec = new RequestSpec("http://localhost:8080");
      testSpec.setMethod(reqData.getMethod());
      testSpec.setHost(reqData.getHost());
      testSpec.setPort(reqData.getPort());
      testSpec.setPath(pathAndQuery);
      testSpec.setTls(reqData.getPort() === 443);
      headerSet.forEach((header) => {
        const value = originalHeaders[header];
        if (value) {
          if (Array.isArray(value)) {
            value.forEach((v) => testSpec.setHeader(header, v));
          } else {
            testSpec.setHeader(header, value);
          }
        }
      });
      if (body) {
        testSpec.setBody(body);
      }
      try {
        const testRequest = await sendRequestWithTimeout(sdk, testSpec);
        if (!testRequest.response) {
          continue;
        }
        const isEquivalent = await compareResponses(originalRequest.response, testRequest.response);
        if (isEquivalent) {
          minimalWorkingHeaders = headerSet;
          break;
        }
      } catch (error) {
        sdk.console.log(`Error testing header combination: ${error instanceof Error ? error.message : "Unknown error"}`);
        continue;
      }
    }
    if (!minimalWorkingHeaders) {
      return {
        _type: "error",
        message: "Could not find a minimal working set of headers"
      };
    }
    minimalWorkingHeaders.forEach((header) => {
      const value = originalHeaders[header];
      if (value) {
        if (Array.isArray(value)) {
          value.forEach((v) => spec.setHeader(header, v));
        } else {
          spec.setHeader(header, value);
        }
      }
    });
    if (body) {
      spec.setBody(body);
    }
    try {
      await delay(RATE_LIMIT.minDelayMs);
      const sentRequest = await sendRequestWithTimeout(sdk, spec);
      if (!sentRequest.response) {
        return {
          _type: "warning",
          message: "Request minimized but no response received"
        };
      }
      const session = await sdk.replay.createSession(spec);
      if (!session) {
        return {
          _type: "warning",
          message: "Request minimized but could not create replay session"
        };
      }
      let domain = spec.getHost();
      let port = spec.getPort();
      let path = spec.getPath();
      let id = session.getId();
      let code = sentRequest.response.getCode();
      sdk.console.log(`REQ ${id}: ${domain}:${port}${path} received a status code of ${code}`);
      return {
        _type: "success",
        message: "Request minimized successfully",
        statusCode: code,
        requestId: id
      };
    } catch (error) {
      return {
        _type: "error",
        message: error instanceof Error ? error.message : "Unknown error occurred"
      };
    }
  } catch (error) {
    return {
      _type: "error",
      message: error instanceof Error ? error.message : "Unknown error occurred"
    };
  }
}
function init(sdk) {
  sdk.api.register("minimizeRequest", minimizeRequest);
}
export {
  init
};
