import { RequestSpec } from "caido:utils";
import { SDK, DefineAPI } from "caido:plugin";

// Rate limiting configuration
const RATE_LIMIT = {
  requestsPerSecond: 2,  // Maximum 2 requests per second
  minDelayMs: 500       // Minimum 500ms between requests
};

// Request configuration
const REQUEST_CONFIG = {
  timeoutMs: 30000,     // 30 second timeout for requests
  maxRetries: 2         // Maximum number of retries for failed requests
};

// Helper function to delay execution
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Helper function to send request with timeout and retries
async function sendRequestWithTimeout(sdk: SDK, spec: RequestSpec, retryCount = 0): Promise<any> {
  try {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error(`Request timed out after ${REQUEST_CONFIG.timeoutMs}ms`)), REQUEST_CONFIG.timeoutMs);
    });

    const requestPromise = sdk.requests.send(spec);
    const result = await Promise.race([requestPromise, timeoutPromise]);
    return result;
  } catch (error) {
    if (retryCount < REQUEST_CONFIG.maxRetries) {
      // Wait before retrying
      await delay(RATE_LIMIT.minDelayMs);
      return sendRequestWithTimeout(sdk, spec, retryCount + 1);
    }
    throw error;
  }
}

interface MinimizeResult {
  _type: string;
  message: string;
  statusCode?: number;
  requestId?: string;
}

async function compareResponses(original: any, current: any): Promise<boolean> {
  // Compare status codes
  if (original.getCode() !== current.getCode()) {
    return false;
  }

  // Compare content length
  const originalLength = original.getHeaders()?.['content-length'];
  const currentLength = current.getHeaders()?.['content-length'];
  if (originalLength !== currentLength) {
    return false;
  }

  // Compare content type
  const originalContentType = original.getHeaders()?.['content-type'];
  const currentContentType = current.getHeaders()?.['content-type'];
  if (originalContentType !== currentContentType) {
    return false;
  }

  // Compare response body length
  const originalBody = original.getBody();
  const currentBody = current.getBody();
  if (originalBody?.length !== currentBody?.length) {
    return false;
  }

  // For JSON responses, compare structure
  if (originalContentType?.includes('application/json')) {
    try {
      const originalJson = JSON.parse(originalBody?.toString() || '{}');
      const currentJson = JSON.parse(currentBody?.toString() || '{}');
      
      // Compare top-level keys
      const originalKeys = Object.keys(originalJson).sort();
      const currentKeys = Object.keys(currentJson).sort();
      if (JSON.stringify(originalKeys) !== JSON.stringify(currentKeys)) {
        return false;
      }
    } catch (e) {
      // If JSON parsing fails, fall back to string comparison
      if (originalBody?.toString() !== currentBody?.toString()) {
        return false;
      }
    }
  }

  return true;
}

function getAllHeaderCombinations(headers: Record<string, string | string[]>): string[][] {
  const headerKeys = Object.keys(headers).filter(key => headers[key] !== undefined);
  const combinations: string[][] = [];
  
  // Generate all possible combinations of headers
  for (let i = 1; i <= headerKeys.length; i++) {
    const currentCombination: string[] = [];
    generateCombinations(headerKeys, i, 0, currentCombination, combinations);
  }
  
  return combinations;
}

function generateCombinations(
  headers: string[],
  size: number,
  start: number,
  current: string[],
  result: string[][]
) {
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

async function minimizeRequest(sdk: SDK, requestId: string): Promise<MinimizeResult> {
  try {
    // Get the original request
    const request = await sdk.requests.get(requestId);
    if (!request) {
      return {
        _type: "error",
        message: "Request not found"
      };
    }

    // Create a new request spec
    const spec = new RequestSpec("http://localhost:8080");
    
    // Copy over the request properties
    const reqData = request.request;
    if (!reqData) {
      return {
        _type: "error",
        message: "Request data not found"
      };
    }

    // Set the basic properties
    spec.setMethod(reqData.getMethod());
    spec.setHost(reqData.getHost());
    spec.setPort(reqData.getPort());
    spec.setPath(reqData.getPath());
    spec.setTls(reqData.getPort() === 443);

    // Get original headers
    const originalHeaders = reqData.getHeaders() || {};
    
    // Send original request to get baseline response
    const originalSpec = new RequestSpec("http://localhost:8080");
    originalSpec.setMethod(reqData.getMethod());
    originalSpec.setHost(reqData.getHost());
    originalSpec.setPort(reqData.getPort());
    
    // Get the full URL including query parameters
    const fullUrl = reqData.getUrl();
    const pathAndQuery = fullUrl.substring(fullUrl.indexOf('/', 8)); // Skip protocol and host
    originalSpec.setPath(pathAndQuery);
    originalSpec.setTls(reqData.getPort() === 443);
    
    // Copy request body if it exists
    const body = reqData.getBody();
    if (body) {
      originalSpec.setBody(body);
    }
    
    // Copy all original headers
    Object.entries(originalHeaders).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(v => originalSpec.setHeader(key, v));
      } else {
        originalSpec.setHeader(key, value);
      }
    });

    // Add rate limiting delay before sending request
    await delay(RATE_LIMIT.minDelayMs);
    
    // Send original request with timeout handling
    const originalRequest = await sendRequestWithTimeout(sdk, originalSpec);
    if (!originalRequest.response) {
      return {
        _type: "error",
        message: "Failed to get original response"
      };
    }

    // Check if original request was successful
    const originalStatusCode = originalRequest.response.getCode();
    if (originalStatusCode < 200 || originalStatusCode >= 300) {
      return {
        _type: "error",
        message: `Original request failed with status code ${originalStatusCode}. Cannot minimize a failing request.`
      };
    }

    // Get all possible combinations of headers
    const headerCombinations = getAllHeaderCombinations(originalHeaders);
    headerCombinations.sort((a, b) => a.length - b.length);
    
    let minimalWorkingHeaders: string[] | null = null;
    
    // Try each combination until we find a working one
    for (const headerSet of headerCombinations) {
      // Add rate limiting delay before each test request
      await delay(RATE_LIMIT.minDelayMs);

      const testSpec = new RequestSpec("http://localhost:8080");
      testSpec.setMethod(reqData.getMethod());
      testSpec.setHost(reqData.getHost());
      testSpec.setPort(reqData.getPort());
      testSpec.setPath(pathAndQuery);
      testSpec.setTls(reqData.getPort() === 443);

      // Add only the headers in this combination
      headerSet.forEach(header => {
        const value = originalHeaders[header];
        if (value) {
          if (Array.isArray(value)) {
            value.forEach(v => testSpec.setHeader(header, v));
          } else {
            testSpec.setHeader(header, value);
          }
        }
      });

      // Copy body to test request
      if (body) {
        testSpec.setBody(body);
      }

      try {
        // Send test request with timeout handling
        const testRequest = await sendRequestWithTimeout(sdk, testSpec);
        if (!testRequest.response) {
          continue;
        }

        // Compare responses
        const isEquivalent = await compareResponses(originalRequest.response, testRequest.response);
        if (isEquivalent) {
          minimalWorkingHeaders = headerSet;
          break;
        }
      } catch (error) {
        // Log error but continue with next combination
        sdk.console.log(`Error testing header combination: ${error instanceof Error ? error.message : 'Unknown error'}`);
        continue;
      }
    }

    if (!minimalWorkingHeaders) {
      return {
        _type: "error",
        message: "Could not find a minimal working set of headers"
      };
    }

    // Create final minimized request with only the minimal working headers
    minimalWorkingHeaders.forEach(header => {
      const value = originalHeaders[header];
      if (value) {
        if (Array.isArray(value)) {
          value.forEach(v => spec.setHeader(header, v));
        } else {
          spec.setHeader(header, value);
        }
      }
    });

    // Copy body to final request
    if (body) {
      spec.setBody(body);
    }

    // Send the request and create it in replay
    try {
      // Add rate limiting delay before final request
      await delay(RATE_LIMIT.minDelayMs);
      
      // First send the request to verify it works
      const sentRequest = await sendRequestWithTimeout(sdk, spec);
      if (!sentRequest.response) {
        return {
          _type: "warning",
          message: "Request minimized but no response received"
        };
      }

      // Create a new session in replay with the request
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

export type API = DefineAPI<{
  minimizeRequest: typeof minimizeRequest;
}>;

export function init(sdk: SDK<API>) {
  sdk.api.register("minimizeRequest", minimizeRequest);
}