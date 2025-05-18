// packages/backend/src/index.ts
import { RequestSpec } from "caido:utils";
async function compareResponses(original, current) {
  if (original.getCode() !== current.getCode()) {
    return false;
  }
  const originalLength = original.getHeaders()?.["content-length"];
  const currentLength = current.getHeaders()?.["content-length"];
  if (originalLength !== currentLength) {
    return false;
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
    current.push(headers[i]);
    generateCombinations(headers, size, i + 1, current, result);
    current.pop();
  }
}
async function minimizeRequest(sdk, requestId) {
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
  originalSpec.setPath(reqData.getPath());
  originalSpec.setTls(reqData.getPort() === 443);
  Object.entries(originalHeaders).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => originalSpec.setHeader(key, v));
    } else {
      originalSpec.setHeader(key, value);
    }
  });
  const originalRequest = await sdk.requests.send(originalSpec);
  if (!originalRequest.response) {
    return {
      _type: "error",
      message: "Failed to get original response"
    };
  }
  const headerCombinations = getAllHeaderCombinations(originalHeaders);
  headerCombinations.sort((a, b) => a.length - b.length);
  let minimalWorkingHeaders = null;
  for (const headerSet of headerCombinations) {
    const testSpec = new RequestSpec("http://localhost:8080");
    testSpec.setMethod(reqData.getMethod());
    testSpec.setHost(reqData.getHost());
    testSpec.setPort(reqData.getPort());
    testSpec.setPath(reqData.getPath());
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
    const testRequest = await sdk.requests.send(testSpec);
    if (!testRequest.response) {
      continue;
    }
    const isEquivalent = await compareResponses(originalRequest.response, testRequest.response);
    if (isEquivalent) {
      minimalWorkingHeaders = headerSet;
      break;
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
  try {
    const sentRequest = await sdk.requests.send(spec);
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
}
function init(sdk) {
  sdk.api.register("minimizeRequest", minimizeRequest);
}
export {
  init
};
