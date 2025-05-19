import { RequestSpec } from "caido:utils";
import { SDK, DefineAPI } from "caido:plugin";

// Rate limiting configuration
const RATE_LIMIT = {
  requestsPerSecond: 2,  // Maximum 2 requests per second
  minDelayMs: 500,       // Minimum 500ms between requests
};

// Request configuration
const REQUEST_CONFIG = {
  timeoutMs: 30000,     // 30 second timeout for requests
  maxRetries: 2,        // Maximum number of retries for failed requests
};

// Helper to delay execution
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Wrapper to send requests with timeout and retries
async function sendRequestWithTimeout(sdk: SDK<any>, spec: RequestSpec, retryCount = 0): Promise<any> {
  try {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error(`Request timed out after ${REQUEST_CONFIG.timeoutMs}ms`)), REQUEST_CONFIG.timeoutMs);
    });
    const requestPromise = sdk.requests.send(spec);
    return await Promise.race([requestPromise, timeoutPromise]);
  } catch (error) {
    if (retryCount < REQUEST_CONFIG.maxRetries) {
      await delay(RATE_LIMIT.minDelayMs);
      return sendRequestWithTimeout(sdk, spec, retryCount + 1);
    }
    throw error;
  }
}

// Compare two responses for equivalence
async function compareResponses(original: any, current: any): Promise<boolean> {
  if (original.getCode() !== current.getCode()) return false;

  const origHeaders = original.getHeaders() || {};
  const currHeaders = current.getHeaders()  || {};
  if (origHeaders['content-length'] !== currHeaders['content-length']) return false;
  if (origHeaders['content-type'] !== currHeaders['content-type']) return false;

  const origBody = original.getBody();
  const currBody = current.getBody();
  if (origBody?.length !== currBody?.length) return false;

  const contentType = origHeaders['content-type'];
  if (contentType?.includes('application/json')) {
    try {
      const origJson = JSON.parse(origBody.toString() || '{}');
      const currJson = JSON.parse(currBody.toString() || '{}');
      const origKeys = Object.keys(origJson).sort();
      const currKeys = Object.keys(currJson).sort();
      if (JSON.stringify(origKeys) !== JSON.stringify(currKeys)) return false;
    } catch {
      if (origBody.toString() !== currBody.toString()) return false;
    }
  }

  return true;
}

interface MinimizeResult {
  _type: string;
  message: string;
  statusCode?: number;
  requestId?: string;
}

// Main minimization routine
async function minimizeRequest(sdk: SDK<any>, requestId: string): Promise<MinimizeResult> {
  try {
    // Fetch original request
    const reqWrapper = await sdk.requests.get(requestId);
    const reqData = reqWrapper?.request;
    if (!reqData) {
      return { _type: 'error', message: 'Request data not found' };
    }

    // Build base spec for baseline
    const originalSpec = new RequestSpec('http://localhost:8080');
    originalSpec.setMethod(reqData.getMethod());
    originalSpec.setHost(reqData.getHost());
    originalSpec.setPort(reqData.getPort());
    const fullUrl = reqData.getUrl();
    const pathAndQuery = fullUrl.substring(fullUrl.indexOf('/', 8));
    originalSpec.setPath(pathAndQuery);
    originalSpec.setTls(reqData.getPort() === 443);
    const initBody = reqData.getBody();
    if (initBody) originalSpec.setBody(initBody);
    const originalHeaders = reqData.getHeaders() || {};
    // Set all headers for baseline
    for (const [h, v] of Object.entries(originalHeaders)) {
      if (Array.isArray(v)) v.forEach(val => originalSpec.setHeader(h, val));
      else originalSpec.setHeader(h, v);
    }

    // Send baseline to verify
    await delay(RATE_LIMIT.minDelayMs);
    const originalResult = await sendRequestWithTimeout(sdk, originalSpec);
    if (!originalResult.response) {
      return { _type: 'error', message: 'Failed to get original response' };
    }
    const originalResp = originalResult.response;
    const origStatus = originalResp.getCode();
    if (origStatus < 200 || origStatus >= 300) {
      return { _type: 'error', message: `Original request failed with status ${origStatus}` };
    }

    // 1. Minimize query parameters
    const urlObj = new URL(reqData.getUrl());
    let minimalQuery = new URLSearchParams(urlObj.searchParams);
    for (const key of Array.from(urlObj.searchParams.keys())) {
      await delay(RATE_LIMIT.minDelayMs);
      const trialQuery = new URLSearchParams(minimalQuery);
      trialQuery.delete(key);
      const testSpec = new RequestSpec('http://localhost:8080');
      testSpec.setMethod(reqData.getMethod());
      testSpec.setHost(reqData.getHost());
      testSpec.setPort(reqData.getPort());
      testSpec.setTls(reqData.getPort() === 443);
      testSpec.setPath(urlObj.pathname + (trialQuery.toString() ? '?' + trialQuery.toString() : ''));
      if (initBody) testSpec.setBody(initBody);
      for (const [h, v] of Object.entries(originalHeaders)) {
        if (h.toLowerCase() === 'host') continue;
        if (Array.isArray(v)) v.forEach(val => testSpec.setHeader(h, val));
        else testSpec.setHeader(h, v);
      }
      const trialResult = await sendRequestWithTimeout(sdk, testSpec);
      if (trialResult.response && await compareResponses(originalResp, trialResult.response)) {
        minimalQuery = trialQuery;
      }
    }

    // 2. Minimize form body parameters
    let minimalBody = initBody;
    const contentType = originalHeaders['content-type'] || '';
    if (contentType.includes('application/x-www-form-urlencoded') && initBody) {
      let bodyParams = new URLSearchParams(initBody.toString());
      for (const key of Array.from(bodyParams.keys())) {
        await delay(RATE_LIMIT.minDelayMs);
        const trialBody = new URLSearchParams(bodyParams);
        trialBody.delete(key);
        const testSpec = new RequestSpec('http://localhost:8080');
        testSpec.setMethod(reqData.getMethod());
        testSpec.setHost(reqData.getHost());
        testSpec.setPort(reqData.getPort());
        testSpec.setTls(reqData.getPort() === 443);
        testSpec.setPath(urlObj.pathname + (minimalQuery.toString() ? '?' + minimalQuery.toString() : ''));
        // headers
        for (const [h, v] of Object.entries(originalHeaders)) {
          if (h.toLowerCase() === 'host') continue;
          if (Array.isArray(v)) v.forEach(val => testSpec.setHeader(h, val));
          else testSpec.setHeader(h, v);
        }
        const bodyStr = trialBody.toString();
        testSpec.setBody(bodyStr);
        const trialResult = await sendRequestWithTimeout(sdk, testSpec);
        if (trialResult.response && await compareResponses(originalResp, trialResult.response)) {
          bodyParams = trialBody;
          minimalBody = Buffer.from(bodyStr);
        }
      }
    }

    // 3. Minimize headers (skip Host)
    let minimalHeaders = Object.keys(originalHeaders).filter(h => h.toLowerCase() !== 'host');

    // 3.1 First try removing all cookies
    const cookieHeader = minimalHeaders.find(h => h.toLowerCase() === 'cookie');
    if (cookieHeader) {
      await delay(RATE_LIMIT.minDelayMs);
      const trialSpecsH = new RequestSpec('http://localhost:8080');
      trialSpecsH.setMethod(reqData.getMethod());
      trialSpecsH.setHost(reqData.getHost());
      trialSpecsH.setPort(reqData.getPort());
      trialSpecsH.setTls(reqData.getPort() === 443);
      trialSpecsH.setPath(urlObj.pathname + (minimalQuery.toString() ? '?' + minimalQuery.toString() : ''));
      if (minimalBody) trialSpecsH.setBody(minimalBody);
      
      // Set all headers except cookies
      for (const h of minimalHeaders.filter(h => h.toLowerCase() !== 'cookie')) {
        const vals = originalHeaders[h];
        if (Array.isArray(vals)) vals.forEach(val => trialSpecsH.setHeader(h, val));
        else if (vals) trialSpecsH.setHeader(h, vals);
      }

      const trialResult = await sendRequestWithTimeout(sdk, trialSpecsH);
      if (trialResult.response && await compareResponses(originalResp, trialResult.response)) {
        // If removing all cookies works, remove the cookie header
        minimalHeaders = minimalHeaders.filter(h => h.toLowerCase() !== 'cookie');
      } else {
        // If removing all cookies fails, try removing them one by one
        const cookieValue = originalHeaders[cookieHeader];
        if (cookieValue) {
          const cookies = Array.isArray(cookieValue) ? cookieValue : [cookieValue];
          for (const cookie of cookies) {
            await delay(RATE_LIMIT.minDelayMs);
            const trialSpecsH = new RequestSpec('http://localhost:8080');
            trialSpecsH.setMethod(reqData.getMethod());
            trialSpecsH.setHost(reqData.getHost());
            trialSpecsH.setPort(reqData.getPort());
            trialSpecsH.setTls(reqData.getPort() === 443);
            trialSpecsH.setPath(urlObj.pathname + (minimalQuery.toString() ? '?' + minimalQuery.toString() : ''));
            if (minimalBody) trialSpecsH.setBody(minimalBody);

            // Set all headers including cookies except the current one
            for (const h of minimalHeaders) {
              if (h.toLowerCase() === 'cookie') {
                const remainingCookies = cookies.filter(c => c !== cookie);
                if (remainingCookies.length > 0) {
                  trialSpecsH.setHeader(h, remainingCookies.join('; '));
                }
              } else {
                const vals = originalHeaders[h];
                if (Array.isArray(vals)) vals.forEach(val => trialSpecsH.setHeader(h, val));
                else if (vals) trialSpecsH.setHeader(h, vals);
              }
            }

            const trialResult = await sendRequestWithTimeout(sdk, trialSpecsH);
            if (trialResult.response && await compareResponses(originalResp, trialResult.response)) {
              // If removing this cookie works, update the cookie header
              const remainingCookies = cookies.filter(c => c !== cookie);
              if (remainingCookies.length > 0) {
                originalHeaders[cookieHeader] = remainingCookies;
              } else {
                minimalHeaders = minimalHeaders.filter(h => h.toLowerCase() !== 'cookie');
              }
            }
          }
        }
      }
    }

    // 3.2 Continue with remaining headers
    for (const headerKey of [...minimalHeaders]) {
      await delay(RATE_LIMIT.minDelayMs);
      const trialSpecsH = new RequestSpec('http://localhost:8080');
      trialSpecsH.setMethod(reqData.getMethod());
      trialSpecsH.setHost(reqData.getHost());
      trialSpecsH.setPort(reqData.getPort());
      trialSpecsH.setTls(reqData.getPort() === 443);
      trialSpecsH.setPath(urlObj.pathname + (minimalQuery.toString() ? '?' + minimalQuery.toString() : ''));
      if (minimalBody) trialSpecsH.setBody(minimalBody);
      // set only minimalHeaders minus headerKey
      for (const h of minimalHeaders.filter(h => h !== headerKey)) {
        const vals = originalHeaders[h];
        if (Array.isArray(vals)) vals.forEach(val => trialSpecsH.setHeader(h, val));
        else trialSpecsH.setHeader(h, vals);
      }
      const trialResult = await sendRequestWithTimeout(sdk, trialSpecsH);
      if (trialResult.response && await compareResponses(originalResp, trialResult.response)) {
        minimalHeaders = minimalHeaders.filter(h => h !== headerKey);
      }
    }

    // 4. Build final minimized request and send
    const finalSpec = new RequestSpec('http://localhost:8080');
    finalSpec.setMethod(reqData.getMethod());
    finalSpec.setHost(reqData.getHost());
    finalSpec.setPort(reqData.getPort());
    finalSpec.setTls(reqData.getPort() === 443);
    finalSpec.setPath(urlObj.pathname + (minimalQuery.toString() ? '?' + minimalQuery.toString() : ''));
    if (minimalBody) finalSpec.setBody(minimalBody);
    for (const h of minimalHeaders) {
      const vals = originalHeaders[h];
      if (Array.isArray(vals)) vals.forEach(val => finalSpec.setHeader(h, val));
      else finalSpec.setHeader(h, vals);
    }

    await delay(RATE_LIMIT.minDelayMs);
    const finalResult = await sendRequestWithTimeout(sdk, finalSpec);
    const session = finalResult.response
      ? await sdk.replay.createSession(finalSpec)
      : null;

    if (session) sdk.console.log(`REQ ${session.getId()}:${reqData.getHost()}${urlObj.pathname} => ${finalResult.response.getCode()}`);
    return {
      _type: session ? 'success' : 'warning',
      message: session ? 'Request minimized successfully' : 'Minimized but could not open replay session',
      statusCode: finalResult.response?.getCode(),
      requestId: session?.getId()
    };
  } catch (error) {
    return { _type: 'error', message: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export type API = DefineAPI<{ minimizeRequest: typeof minimizeRequest }>;

export function init(sdk: SDK<API>) {
  sdk.api.register('minimizeRequest', minimizeRequest);
}
