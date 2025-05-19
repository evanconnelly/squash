import type { Caido } from "@caido/sdk-frontend";
import type { API } from "../../backend/src";

export type CaidoSDK = Caido<API>;

export function init(sdk: CaidoSDK) {
  /* --- 1. Register the command that triggers minimization --- */
  sdk.commands.register("squash.minimize", {
    name: "Squash – Minimize Request",
    group: "Squash",
    run: async (context) => {
      // More detailed context validation
      if (!context) {
        sdk.window.showToast("No context provided", { variant: "error" });
        return;
      }

      if (typeof context !== 'object') {
        sdk.window.showToast("Invalid context type", { variant: "error" });
        return;
      }

      let requestId: string | undefined;

      // Handle HTTP History requests
      if (context.type === 'RequestContext') {
        if (!context.request || typeof context.request !== 'object') {
          sdk.window.showToast("No request object in context", { variant: "error" });
          return;
        }
        requestId = (context.request as { id?: string }).id;
      }
      // Handle Replay tool requests
      else if (context.type === 'RequestRowContext') {
        if (!context.requests || !Array.isArray(context.requests) || context.requests.length === 0) {
          sdk.window.showToast("No requests in context", { variant: "error" });
          return;
        }
        const firstRequest = context.requests[0];
        if (!firstRequest || !firstRequest.id) {
          sdk.window.showToast("Request missing ID", { variant: "error" });
          return;
        }
        requestId = firstRequest.id;
      }

      if (!requestId) {
        sdk.window.showToast("Request missing ID (if in replay, be sure to send request before minimizing)", { variant: "error" });
        return;
      }

      sdk.window.showToast("Squashing…", { variant: "info", duration: 1500 });
      try {
        const result = await sdk.backend.minimizeRequest(requestId);
        if (!result) {
          sdk.window.showToast("No response from backend", { variant: "error" });
          return;
        }

        if (result._type === "success" && result.requestId) {
          sdk.window.showToast("Request minimized successfully!", { variant: "success" });
          // The minimized request should automatically appear in replay
        } else {
          sdk.window.showToast(result.message || "Unknown error occurred", { variant: "warning" });
        }
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        sdk.window.showToast(`Error: ${errorMessage}`, { variant: "error" });
      }
    }
  });

  /* --- 2. Surface it in the right-click menu on requests --- */
  sdk.menu.registerItem({
    type: "Request",
    commandId: "squash.minimize",
    leadingIcon: "fas fa-compress"
  });

  // Also register for request rows (which includes replay)
  sdk.menu.registerItem({
    type: "RequestRow",
    commandId: "squash.minimize",
    leadingIcon: "fas fa-compress"
  });
}