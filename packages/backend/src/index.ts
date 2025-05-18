import { RequestSpec } from "caido:utils";
import { SDK, DefineAPI } from "caido:plugin";

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
    current.push(headers[i]);
    generateCombinations(headers, size, i + 1, current, result);
    current.pop();
  }
}

async function minimizeRequest(sdk: SDK, requestId: string): Promise<MinimizeResult> {
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
  spec.setTls(reqData.getPort() === 443); // Assume TLS if port is 443

  // Get original headers
  const originalHeaders = reqData.getHeaders() || {};
  
  // Send original request to get baseline response
  const originalSpec = new RequestSpec("http://localhost:8080");
  originalSpec.setMethod(reqData.getMethod());
  originalSpec.setHost(reqData.getHost());
  originalSpec.setPort(reqData.getPort());
  originalSpec.setPath(reqData.getPath());
  originalSpec.setTls(reqData.getPort() === 443);
  
  // Copy all original headers
  Object.entries(originalHeaders).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(v => originalSpec.setHeader(key, v));
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

  // Get all possible combinations of headers
  const headerCombinations = getAllHeaderCombinations(originalHeaders);
  
  // Sort combinations by length (ascending) to try smallest combinations first
  headerCombinations.sort((a, b) => a.length - b.length);
  
  let minimalWorkingHeaders: string[] | null = null;
  
  // Try each combination until we find a working one
  for (const headerSet of headerCombinations) {
    const testSpec = new RequestSpec("http://localhost:8080");
    testSpec.setMethod(reqData.getMethod());
    testSpec.setHost(reqData.getHost());
    testSpec.setPort(reqData.getPort());
    testSpec.setPath(reqData.getPath());
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

    // Send test request
    const testRequest = await sdk.requests.send(testSpec);
    if (!testRequest.response) {
      continue;
    }

    // Compare responses
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

  // Send the request and create it in replay
  try {
    // First send the request to verify it works
    const sentRequest = await sdk.requests.send(spec);
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
}

// Define the API with explicit return type
export type API = DefineAPI<{
  minimizeRequest: typeof minimizeRequest;
}>;

export function init(sdk: SDK<API>) {
  sdk.api.register("minimizeRequest", minimizeRequest);
}