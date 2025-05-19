// packages/backend/src/index.ts
import { RequestSpec } from "caido:utils";
var RATE_LIMIT = {
  requestsPerSecond: 2,
  minDelayMs: 500
};
var REQUEST_CONFIG = {
  timeoutMs: 3e4,
  maxRetries: 2
};
var delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function sendRequestWithTimeout(sdk, spec, retryCount = 0) {
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
async function compareResponses(original, current) {
  if (original.getCode() !== current.getCode()) return false;
  const origHeaders = original.getHeaders() || {};
  const currHeaders = current.getHeaders() || {};
  if (origHeaders["content-length"] !== currHeaders["content-length"]) return false;
  if (origHeaders["content-type"] !== currHeaders["content-type"]) return false;
  const origBody = original.getBody();
  const currBody = current.getBody();
  if (origBody?.length !== currBody?.length) return false;
  const contentType = origHeaders["content-type"];
  if (contentType?.includes("application/json")) {
    try {
      const origJson = JSON.parse(origBody.toString() || "{}");
      const currJson = JSON.parse(currBody.toString() || "{}");
      const origKeys = Object.keys(origJson).sort();
      const currKeys = Object.keys(currJson).sort();
      if (JSON.stringify(origKeys) !== JSON.stringify(currKeys)) return false;
    } catch {
      if (origBody.toString() !== currBody.toString()) return false;
    }
  }
  return true;
}
async function minimizeRequest(sdk, requestId) {
  try {
    const reqWrapper = await sdk.requests.get(requestId);
    const reqData = reqWrapper?.request;
    if (!reqData) return { _type: "error", message: "Request data not found" };
    const originalSpec = new RequestSpec("http://localhost:8080");
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
      if (Array.isArray(v)) v.forEach((val) => originalSpec.setHeader(h, val));
      else originalSpec.setHeader(h, v);
    }
    await delay(RATE_LIMIT.minDelayMs);
    const originalResult = await sendRequestWithTimeout(sdk, originalSpec);
    if (!originalResult.response) return { _type: "error", message: "Failed to get original response" };
    const originalResp = originalResult.response;
    const origStatus = originalResp.getCode();
    if (origStatus < 200 || origStatus >= 300) return { _type: "error", message: `Original request failed with status ${origStatus}` };
    let minimalQuery = new URLSearchParams(urlObj.searchParams);
    for (const key of Array.from(urlObj.searchParams.keys())) {
      await delay(RATE_LIMIT.minDelayMs);
      const trialQuery = new URLSearchParams(minimalQuery);
      trialQuery.delete(key);
      const testSpec = new RequestSpec("http://localhost:8080");
      testSpec.setMethod(reqData.getMethod());
      testSpec.setHost(reqData.getHost());
      testSpec.setPort(reqData.getPort());
      testSpec.setTls(reqData.getPort() === 443);
      testSpec.setPath(urlObj.pathname + (trialQuery.toString() ? "?" + trialQuery.toString() : ""));
      if (initBody) testSpec.setBody(initBody);
      for (const [h, v] of Object.entries(originalHeaders)) {
        if (h.toLowerCase() === "host") continue;
        if (Array.isArray(v)) v.forEach((val) => testSpec.setHeader(h, val));
        else testSpec.setHeader(h, v);
      }
      const trialResult = await sendRequestWithTimeout(sdk, testSpec);
      if (trialResult.response && await compareResponses(originalResp, trialResult.response)) {
        minimalQuery = trialQuery;
      }
    }
    let minimalBody = initBody;
    const contentType = originalHeaders["content-type"] || "";
    if (contentType.includes("application/x-www-form-urlencoded") && initBody) {
      let bodyParams = new URLSearchParams(initBody.toString());
      for (const key of Array.from(bodyParams.keys())) {
        await delay(RATE_LIMIT.minDelayMs);
        const trialBody = new URLSearchParams(bodyParams);
        trialBody.delete(key);
        const testSpec = new RequestSpec("http://localhost:8080");
        testSpec.setMethod(reqData.getMethod());
        testSpec.setHost(reqData.getHost());
        testSpec.setPort(reqData.getPort());
        testSpec.setTls(reqData.getPort() === 443);
        testSpec.setPath(urlObj.pathname + (minimalQuery.toString() ? "?" + minimalQuery.toString() : ""));
        for (const [h, v] of Object.entries(originalHeaders)) {
          if (h.toLowerCase() === "host") continue;
          if (Array.isArray(v)) v.forEach((val) => testSpec.setHeader(h, val));
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
    let minimalHeaders = Object.keys(originalHeaders).filter((h) => h.toLowerCase() !== "host");
    for (const headerKey of [...minimalHeaders]) {
      await delay(RATE_LIMIT.minDelayMs);
      if (headerKey.toLowerCase() === "cookie") {
        const raw = originalHeaders[headerKey];
        const cookieStr = Array.isArray(raw) ? raw.join("; ") : raw || "";
        let cookies = cookieStr.split(";").map((c) => c.trim()).filter((c) => c);
        const removeAll = new RequestSpec("http://localhost:8080");
        removeAll.setMethod(reqData.getMethod());
        removeAll.setHost(reqData.getHost());
        removeAll.setPort(reqData.getPort());
        removeAll.setTls(reqData.getPort() === 443);
        removeAll.setPath(urlObj.pathname + (minimalQuery.toString() ? "?" + minimalQuery.toString() : ""));
        if (minimalBody) removeAll.setBody(minimalBody);
        for (const h of minimalHeaders.filter((h2) => h2.toLowerCase() !== "cookie")) {
          const vals = originalHeaders[h];
          if (Array.isArray(vals)) vals.forEach((val) => removeAll.setHeader(h, val));
          else removeAll.setHeader(h, vals);
        }
        const allResult = await sendRequestWithTimeout(sdk, removeAll);
        if (allResult.response && await compareResponses(originalResp, allResult.response)) {
          minimalHeaders = minimalHeaders.filter((h) => h !== headerKey);
          continue;
        }
        for (const cookie of [...cookies]) {
          await delay(RATE_LIMIT.minDelayMs);
          const remaining = cookies.filter((c) => c !== cookie);
          const spec = new RequestSpec("http://localhost:8080");
          spec.setMethod(reqData.getMethod());
          spec.setHost(reqData.getHost());
          spec.setPort(reqData.getPort());
          spec.setTls(reqData.getPort() === 443);
          spec.setPath(urlObj.pathname + (minimalQuery.toString() ? "?" + minimalQuery.toString() : ""));
          if (minimalBody) spec.setBody(minimalBody);
          for (const h of minimalHeaders) {
            if (h.toLowerCase() === "cookie") {
              if (remaining.length) spec.setHeader(h, remaining.join("; "));
            } else {
              const vals = originalHeaders[h];
              if (Array.isArray(vals)) vals.forEach((val) => spec.setHeader(h, val));
              else spec.setHeader(h, vals);
            }
          }
          const result = await sendRequestWithTimeout(sdk, spec);
          if (result.response && await compareResponses(originalResp, result.response)) {
            cookies = remaining;
            if (remaining.length) {
              originalHeaders[headerKey] = [remaining.join("; ")];
            } else {
              minimalHeaders = minimalHeaders.filter((h) => h !== headerKey);
            }
          }
        }
        continue;
      }
      const test = new RequestSpec("http://localhost:8080");
      test.setMethod(reqData.getMethod());
      test.setHost(reqData.getHost());
      test.setPort(reqData.getPort());
      test.setTls(reqData.getPort() === 443);
      test.setPath(urlObj.pathname + (minimalQuery.toString() ? "?" + minimalQuery.toString() : ""));
      if (minimalBody) test.setBody(minimalBody);
      for (const h of minimalHeaders.filter((h2) => h2 !== headerKey)) {
        const vals = originalHeaders[h];
        if (Array.isArray(vals)) vals.forEach((val) => test.setHeader(h, val));
        else test.setHeader(h, vals);
      }
      const res = await sendRequestWithTimeout(sdk, test);
      if (res.response && await compareResponses(originalResp, res.response)) {
        minimalHeaders = minimalHeaders.filter((h) => h !== headerKey);
      }
    }
    const finalSpec = new RequestSpec("http://localhost:8080");
    finalSpec.setMethod(reqData.getMethod());
    finalSpec.setHost(reqData.getHost());
    finalSpec.setPort(reqData.getPort());
    finalSpec.setTls(reqData.getPort() === 443);
    finalSpec.setPath(urlObj.pathname + (minimalQuery.toString() ? "?" + minimalQuery.toString() : ""));
    if (minimalBody) finalSpec.setBody(minimalBody);
    for (const h of minimalHeaders) {
      const vals = originalHeaders[h];
      if (Array.isArray(vals)) vals.forEach((val) => finalSpec.setHeader(h, val));
      else finalSpec.setHeader(h, vals);
    }
    await delay(RATE_LIMIT.minDelayMs);
    const finalResult = await sendRequestWithTimeout(sdk, finalSpec);
    const session = finalResult.response ? await sdk.replay.createSession(finalSpec) : null;
    if (session) sdk.console.log(`REQ ${session.getId()}:${reqData.getHost()}${urlObj.pathname} => ${finalResult.response.getCode()}`);
    return {
      _type: session ? "success" : "warning",
      message: session ? "Request minimized successfully" : "Minimized but could not open replay session",
      statusCode: finalResult.response?.getCode(),
      requestId: session?.getId()
    };
  } catch (error) {
    return { _type: "error", message: error instanceof Error ? error.message : "Unknown error" };
  }
}
function init(sdk) {
  sdk.api.register("minimizeRequest", minimizeRequest);
}
export {
  init
};
