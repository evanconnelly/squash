import { SDKPlugin } from "@/plugins/sdk";
import { createApp } from "vue";
import App from "./views/App.vue";
import { type FrontendSDK } from "./types";
import { Classic } from "@caido/primevue";
import PrimeVue from "primevue/config";
import { addJob, removeJob, runningCount, genJobId } from "./jobs";


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
  openTabAfterMinimize: true,
  saveRequests: false
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

  const sidebarItem = sdk.sidebar.registerItem("Squash", "/squash", {
    icon: "fas fa-compress",
  });

  // Keep the sidebar badge in sync with the number of running jobs.
  const updateBadge = () => sidebarItem.setCount(runningCount());

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

      // Resolve the target request id across every context type a command can
      // arrive in: the request pane, the response pane, a selected history row,
      // or a keyboard shortcut / command palette (BaseContext, which carries no
      // request).
      let requestId: string | undefined;
      switch (context.type) {
        case 'RequestContext':
        case 'ResponseContext':
          requestId = (context.request as { id?: string } | undefined)?.id;
          break;
        case 'RequestRowContext':
          requestId = context.requests?.[0]?.id;
          break;
        case 'BaseContext':
          // Caido delivers BaseContext (no request) for keyboard shortcuts and
          // the command palette, so there is nothing to minimize. Known upstream
          // limitation: https://github.com/caido/caido/issues/1565
          sdk.window.showToast(
            "Squash can't run from a keyboard shortcut or command palette yet — Caido doesn't pass the request in that context (caido/caido#1565). Right-click a request → Squash → Minimize Request instead.",
            { variant: "error", duration: 6000 },
          );
          return;
      }

      if (!requestId) {
        sdk.window.showToast("Request missing ID (if in replay, be sure to send request before minimizing)", { variant: "error" });
        return;
      }

      // Derive a human-readable label for the job list from whatever the
      // context exposes, falling back to the request id.
      const ctx = context as { request?: Record<string, unknown>; requests?: Record<string, unknown>[] };
      const reqObj = ctx.request ?? ctx.requests?.[0] ?? {};
      const host = (reqObj.host ?? reqObj.hostname) as string | undefined;
      const pathOrUrl = (reqObj.path ?? reqObj.url) as string | undefined;
      const jobLabel = [host, pathOrUrl].filter(Boolean).join('') || `Request ${requestId.slice(0, 8)}`;

      const jobId = genJobId();
      addJob(jobId, jobLabel);
      updateBadge();

      sdk.window.showToast("Squashing…", { variant: "info", duration: 1500 });
      try {
        let config = await sdk.storage.get();
        console.log(`Config: ${JSON.stringify(config)}`);
        const result = await sdk.backend.minimizeRequest(requestId, config, jobId);

        console.log('Minimization result:', result);

        if (result instanceof Error) {
          console.error('Minimization error:', result);
          sdk.window.showToast(`Error: ${result.message}`, { variant: "error" });
          return;
        }

        if (result._type === "success" && result.requestId) {
          sdk.window.showToast(result.message || "Request minimized successfully!", { variant: "success", duration: 6000 });
          try {
            if (config && typeof config === 'object' && 'openTabAfterMinimize' in config && config.openTabAfterMinimize) {
              await sdk.replay.openTab(result.requestId);
            }
          } catch (tabError) {
            console.error('Failed to open replay tab:', tabError);
            sdk.window.showToast("Request minimized but failed to open replay tab", { variant: "warning" });
          }
        } else if (result._type === "cancelled") {
          sdk.window.showToast(result.message || "Minimization cancelled", { variant: "info" });
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
      } finally {
        removeJob(jobId);
        updateBadge();
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

  // NOTE: No default keyboard shortcut is registered. Caido invokes shortcut-
  // triggered commands with a BaseContext that carries no request, so the
  // command cannot resolve a request id to minimize. See caido/caido#1565.
}