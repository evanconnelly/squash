import type { API } from "../../backend/src";
import { SDKPlugin, useSDK } from "@/plugins/sdk";
import { createApp } from "vue";
import App from "./views/App.vue";
import { type FrontendSDK } from "./types";
import { Classic } from "@caido/primevue";
import PrimeVue from "primevue/config";


const DEFAULT_CONFIG = {
  rateLimit: {
    minDelayMs: 500,
  },
  requestConfig: {
    timeoutMs: 30000,
    maxRetries: 2,
  },
  autoRemovedHeaders: ['sec-*'],
  openTabAfterMinimize: true
}

export async function init(sdk: FrontendSDK) {

  const app = createApp(App);
  app.use(SDKPlugin, sdk);
  app.use(PrimeVue, {
    unstyled: true,
    pt: Classic,
  });
  const root = document.createElement("div");
  Object.assign(root.style, {
    height: "100%",
    width: "100%",
  });

  root.id = `plugin--squash`;

  app.mount(root);

  sdk.navigation.addPage("/squash", {
    body: root,
  });

  sdk.sidebar.registerItem("Squash", "/squash", {
    icon: "fas fa-compress",
  });

  let storage = await sdk.storage.get();
  if (!storage) {
    await sdk.storage.set(DEFAULT_CONFIG);
  }

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
        let config = await sdk.storage.get();
        console.log(`Config: ${JSON.stringify(config)}`);
        const result = await sdk.backend.minimizeRequest(requestId, config);
        
        console.log('Minimization result:', result);

        if (result instanceof Error) {
          console.error('Minimization error:', result);
          sdk.window.showToast(`Error: ${result.message}`, { variant: "error" });
          return;
        }

        if (result._type === "success" && result.requestId) {
          sdk.window.showToast("Request minimized successfully!", { variant: "success" });
          try {
            if (config && typeof config === 'object' && 'openTabAfterMinimize' in config && config.openTabAfterMinimize) {
              await sdk.replay.openTab(result.requestId);
            }
          } catch (tabError) {
            console.error('Failed to open replay tab:', tabError);
            sdk.window.showToast("Request minimized but failed to open replay tab", { variant: "warning" });
          }
        } else if (result._type === "warning") {
          sdk.window.showToast(result.message || "Request minimized with warnings", { variant: "warning" });
        } else {
          console.error('Unexpected result type:', result);
          sdk.window.showToast(result.message || "Unknown error occurred", { variant: "error" });
        }
      } catch (error: unknown) {
        console.error('Minimization error:', error);
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