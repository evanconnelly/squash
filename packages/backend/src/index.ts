import { RequestSpec } from "caido:utils";
import { SDK, DefineAPI } from "caido:plugin";
import { Result, err, ok } from 'neverthrow';

// Default configuration values
const DEFAULT_CONFIG = {
  rateLimit: {
    minDelayMs: 100,
  },
  requestConfig: {
    timeoutMs: 30000,
    maxRetries: 2,
  },
  autoRemovedHeaders: ['sec-*'],
  doNotRemoveHeaders: [],
  saveRequests: false
};

// Helper to delay execution
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Helper to normalize header names and values
function normalizeHeader(headerName: string, headerValue: string | string[] | undefined): { name: string, value: string | string[] } {
  const normalizedName = headerName.toLowerCase().trim();
  if (!headerValue) {
    return {
      name: normalizedName,
      value: ''
    };
  }
  if (Array.isArray(headerValue)) {
    return {
      name: normalizedName,
      value: headerValue.map(v => v.trim())
    };
  }
  return {
    name: normalizedName,
    value: headerValue.trim()
  };
}

// Helper to check if a header should be auto-removed
function shouldRemoveHeader(sdk: SDK<API>, headerName: string, patterns: string[]): boolean {
  sdk.console.log(`Checking header ${headerName} against patterns ${patterns}`);
  return patterns.some(pattern => {
    try {
      const regex = new RegExp(pattern.replaceAll('*', '.*'), 'i');
      return regex.test(headerName);
    } catch {
      return pattern.toLowerCase() === headerName.toLowerCase();
    }
  });
}

// Wrapper to send requests with timeout and retries
async function sendRequestWithTimeout(sdk: SDK<API>, spec: RequestSpec, config: any = DEFAULT_CONFIG, retryCount = 0): Promise<any> {
  try {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error(`Request timed out after ${config.requestConfig.timeoutMs}ms`)), config.requestConfig.timeoutMs);
    });
    const requestPromise = (sdk.requests.send as any)(spec, { save: config.saveRequests });
    const result = await Promise.race([requestPromise, timeoutPromise]);
    return result;
  } catch (error) {
    if (retryCount < config.requestConfig.maxRetries) {
      await delay(config.rateLimit.minDelayMs);
      return sendRequestWithTimeout(sdk, spec, config, retryCount + 1);
    }
    throw error;
  }
}

// Compare two responses for equivalence
async function compareResponses(original: any, current: any): Promise<boolean> {
  if (original.getCode() !== current.getCode()) return false;

  const origHeaders = original.getHeaders() || {};
  const currHeaders = current.getHeaders() || {};
  if (origHeaders['content-length'] !== currHeaders['content-length']) return false;
  if (origHeaders['content-type'] !== currHeaders['content-type']) return false;

  // Check Location header if present
  const origLocation = original.getHeader('location');
  const currLocation = current.getHeader('location');
  if (origLocation?.length > 0 || currLocation?.length > 0) {
    if (!origLocation?.length || !currLocation?.length) return false;
    if (origLocation[0] !== currLocation[0]) return false;
  }

  const origBody = original.getBody();
  const currBody = current.getBody();
  if (origBody?.toString().length !== currBody?.toString().length) return false;
  
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
async function minimizeRequest(sdk: SDK<API>, requestId: string, config: any = DEFAULT_CONFIG): Promise<Result<MinimizeResult, Error>> {
  try {
    // Fetch original request
    const reqWrapper = await sdk.requests.get(requestId);
    const reqData = reqWrapper?.request;
    if (!reqData) return err(new Error('Request data not found'));

    // Build baseline spec
    const originalSpec = new RequestSpec('http://localhost:8080');
    originalSpec.setMethod(reqData.getMethod());
    originalSpec.setHost(reqData.getHost());
    originalSpec.setPort(reqData.getPort());
    const fullUrl = reqData.getUrl();
    const urlObj = new URL(fullUrl);
    originalSpec.setPath(urlObj.pathname + urlObj.search);
    originalSpec.setTls(reqData.getPort() === 443);
    const initBody = reqData.getBody();
    if (initBody) originalSpec.setBody(initBody);

    const originalHeaders = reqData.getHeaders() || {};
    for (const [h, v] of Object.entries(originalHeaders)) {
      const { name, value } = normalizeHeader(h, v);
      if (Array.isArray(value)) value.forEach(val => originalSpec.setHeader(name, val));
      else originalSpec.setHeader(name, value);
    }

    // Send baseline
    const originalResult = await sendRequestWithTimeout(sdk, originalSpec, config);
    if (!originalResult) return err(new Error('Failed to get original response'));
    
    const originalResp = originalResult.response;
    if (!originalResp) return err(new Error('Failed to get original response'));

    // 1. Minimize query parameters
    let minimalQuery = new URLSearchParams(urlObj.searchParams);
    for (const key of getSearchParamKeys(urlObj.searchParams)) {
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
        const { name, value } = normalizeHeader(h, v);
        if (Array.isArray(value)) value.forEach(val => testSpec.setHeader(name, val));
        else testSpec.setHeader(name, value);
      }
      await delay(config.rateLimit.minDelayMs);
      const trialResult = await sendRequestWithTimeout(sdk, testSpec, config);
      if (trialResult.response && await compareResponses(originalResp, trialResult.response)) {
        minimalQuery = trialQuery;
      }
    }

    // 2. Minimize form body parameters
    let minimalBody = initBody;
    const contentType = originalHeaders['content-type'] || '';
    if (contentType.includes('application/x-www-form-urlencoded') && initBody) {
      let bodyParams = new URLSearchParams(initBody.toString());
      for (const key of getSearchParamKeys(bodyParams)) {
        const trialBody = new URLSearchParams(bodyParams);
        trialBody.delete(key);
        const testSpec = new RequestSpec('http://localhost:8080');
        testSpec.setMethod(reqData.getMethod());
        testSpec.setHost(reqData.getHost());
        testSpec.setPort(reqData.getPort());
        testSpec.setTls(reqData.getPort() === 443);
        testSpec.setPath(urlObj.pathname + (minimalQuery.toString() ? '?' + minimalQuery.toString() : ''));
        for (const [h, v] of Object.entries(originalHeaders)) {
          if (h.toLowerCase() === 'host') continue;
          const { name, value } = normalizeHeader(h, v);
          if (Array.isArray(value)) value.forEach(val => testSpec.setHeader(name, val));
          else if (value !== undefined) testSpec.setHeader(name, String(value));
        }
        const bodyStr = trialBody.toString();
        testSpec.setBody(bodyStr);
        await delay(config.rateLimit.minDelayMs);
        const trialResult = await sendRequestWithTimeout(sdk, testSpec, config);
        if (trialResult.response && await compareResponses(originalResp, trialResult.response)) {
          bodyParams = trialBody;
          const tempSpec = new RequestSpec('http://localhost:8080');
          tempSpec.setBody(bodyStr);
          minimalBody = tempSpec.getBody();
        }
      }
    }

    // 3. Minimize headers (skip Host)
    let minimalHeaders = Object.keys(originalHeaders).filter(h => h.toLowerCase() !== 'host');
    for (const headerKey of [...minimalHeaders]) {
      // Skip if header matches do-not-remove patterns
      if (shouldRemoveHeader(sdk, headerKey, config?.doNotRemoveHeaders ?? DEFAULT_CONFIG.doNotRemoveHeaders)) {
        sdk.console.log(`Skipping header ${headerKey} due to doNotRemoveHeaders`);
        continue;
      }
      // Skip if header matches auto-removed patterns
      if (shouldRemoveHeader(sdk, headerKey, config?.autoRemovedHeaders ?? DEFAULT_CONFIG.autoRemovedHeaders)) {
        minimalHeaders = minimalHeaders.filter(h => h !== headerKey);
        sdk.console.log(`Removed header ${headerKey}`);
        continue;
      }

      // Special-case Cookie header
      if (headerKey.toLowerCase() === 'cookie') {
        const raw = originalHeaders[headerKey];
        const cookieStr = Array.isArray(raw) ? raw.join('; ') : (raw || '');
        let cookies = cookieStr.split(';').map(c => c.trim()).filter(c => c);

        // Try removing entire Cookie header
        const removeAll = new RequestSpec('http://localhost:8080');
        removeAll.setMethod(reqData.getMethod());
        removeAll.setHost(reqData.getHost());
        removeAll.setPort(reqData.getPort());
        removeAll.setTls(reqData.getPort() === 443);
        removeAll.setPath(urlObj.pathname + (minimalQuery.toString() ? '?' + minimalQuery.toString() : ''));
        if (minimalBody) removeAll.setBody(minimalBody);
        for (const h of minimalHeaders.filter(h => h.toLowerCase() !== 'cookie')) {
          const vals = originalHeaders[h];
          const { name, value } = normalizeHeader(h, vals);
          if (Array.isArray(value)) value.forEach(val => removeAll.setHeader(name, val));
          else if (value !== undefined) removeAll.setHeader(name, String(value));
        }
        const allResult = await sendRequestWithTimeout(sdk, removeAll, config);
        if (allResult.response && await compareResponses(originalResp, allResult.response)) {
          minimalHeaders = minimalHeaders.filter(h => h !== headerKey);
          continue;
        }

        // Otherwise try each cookie
        for (const cookie of [...cookies]) {
          const remaining = cookies.filter(c => c !== cookie);
          const spec = new RequestSpec('http://localhost:8080');
          spec.setMethod(reqData.getMethod());
          spec.setHost(reqData.getHost());
          spec.setPort(reqData.getPort());
          spec.setTls(reqData.getPort() === 443);
          spec.setPath(urlObj.pathname + (minimalQuery.toString() ? '?' + minimalQuery.toString() : ''));
          if (minimalBody) spec.setBody(minimalBody);
          for (const h of minimalHeaders) {
            if (h.toLowerCase() === 'cookie') {
              if (remaining.length) spec.setHeader(h, remaining.join('; '));
            } else {
              const vals = originalHeaders[h];
              const { name, value } = normalizeHeader(h, vals);
              if (Array.isArray(value)) value.forEach(val => spec.setHeader(name, val));
              else if (value !== undefined) spec.setHeader(name, String(value));
            }
          }
          await delay(config.rateLimit.minDelayMs);
          const result = await sendRequestWithTimeout(sdk, spec, config);
          if (result.response && await compareResponses(originalResp, result.response)) {
            cookies = remaining;
            if (remaining.length) {
              originalHeaders[headerKey] = [remaining.join('; ')];
            } else {
              minimalHeaders = minimalHeaders.filter(h => h !== headerKey);
            }
          }
        }
        continue;
      }

      // Generic header removal
      const test = new RequestSpec('http://localhost:8080');
      test.setMethod(reqData.getMethod());
      test.setHost(reqData.getHost());
      test.setPort(reqData.getPort());
      test.setTls(reqData.getPort() === 443);
      test.setPath(urlObj.pathname + (minimalQuery.toString() ? '?' + minimalQuery.toString() : ''));
      if (minimalBody) test.setBody(minimalBody);
      for (const h of minimalHeaders.filter(h => h !== headerKey)) {
        const vals = originalHeaders[h];
        const { name, value } = normalizeHeader(h, vals);
        if (Array.isArray(value)) value.forEach(val => test.setHeader(name, val));
        else if (value !== undefined) test.setHeader(name, String(value));
      }
      await delay(config.rateLimit.minDelayMs);
      const res = await sendRequestWithTimeout(sdk, test, config);
      if (res.response && await compareResponses(originalResp, res.response)) {
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
      const { name, value } = normalizeHeader(h, vals);
      if (Array.isArray(value)) value.forEach(val => finalSpec.setHeader(name, val));
      else if (value !== undefined) finalSpec.setHeader(name, String(value));
    }

    await delay(config.rateLimit.minDelayMs);
    const finalResult = await sendRequestWithTimeout(sdk, finalSpec, config);
    if (!finalResult) return err(new Error('Failed to get final response'));

    let session = null;
    try {
      if (finalResult.response) {
        session = await sdk.replay.createSession(finalSpec);
        sdk.console.log(`REQ ${session.getId()}:${reqData.getHost()}${urlObj.pathname} => ${finalResult.response.getCode()}`);
      }
    } catch (error) {
      sdk.console.error('Failed to create replay session:', error);
      return err(new Error(`Failed to create replay session: ${error instanceof Error ? error.message : 'Unknown error'}`));
    }

    return ok({
      _type: session ? 'success' : 'warning',
      message: session ? 'Request minimized successfully' : 'Minimized but could not open replay session',
      statusCode: finalResult.response?.getCode(),
      requestId: session?.getId(),
    });
  } catch (error) {
    sdk.console.error('Minimization error:', error);
    return err(error instanceof Error ? error : new Error('Unknown error'));
  }
}

export type API = DefineAPI<{
  minimizeRequest: (sdk: SDK<API>, requestId: string, config: any) => Promise<MinimizeResult | Error>
}>;

export function init(sdk: SDK<API>) {
  sdk.api.register('minimizeRequest', async (sdk: SDK<API>, requestId: string, config: any) => {
    const result = await minimizeRequest(sdk, requestId, config);
    if (result.isErr()) {
      throw result.error;
    }
    return result.value;
  });
}

// Helper to get keys from URLSearchParams in a TS-compatible way
function getSearchParamKeys(params: URLSearchParams): string[] {
  const keys: string[] = [];
  params.forEach((_, key) => {
    if (!keys.includes(key)) keys.push(key);
  });
  return keys;
}
