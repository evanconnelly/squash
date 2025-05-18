function t(e) {
  e.commands.register("squash.minimize", {
    name: "Squash – Minimize Request",
    group: "Squash",
    run: async (r) => {
      if (!r) {
        e.window.showToast("No context provided", { variant: "error" });
        return;
      }
      if (typeof r != "object") {
        e.window.showToast("Invalid context type", { variant: "error" });
        return;
      }
      let i;
      if (r.type === "RequestContext") {
        if (!r.request || typeof r.request != "object") {
          e.window.showToast("No request object in context", { variant: "error" });
          return;
        }
        i = r.request.id;
      } else if (r.type === "RequestRowContext") {
        if (!r.requests || !Array.isArray(r.requests) || r.requests.length === 0) {
          e.window.showToast("No requests in context", { variant: "error" });
          return;
        }
        const s = r.requests[0];
        if (!s || !s.id) {
          e.window.showToast("Request missing ID", { variant: "error" });
          return;
        }
        i = s.id;
      }
      if (!i) {
        e.window.showToast("Request missing ID", { variant: "error" });
        return;
      }
      e.window.showToast("Squashing…", { variant: "info", duration: 1500 });
      try {
        const s = await e.backend.minimizeRequest(i);
        if (!s) {
          e.window.showToast("No response from backend", { variant: "error" });
          return;
        }
        s._type === "success" && s.requestId ? e.window.showToast("Request minimized successfully!", { variant: "success" }) : e.window.showToast(s.message || "Unknown error occurred", { variant: "warning" });
      } catch (s) {
        const o = s instanceof Error ? s.message : "Unknown error occurred";
        e.window.showToast(`Error: ${o}`, { variant: "error" });
      }
    }
  }), e.menu.registerItem({
    type: "Request",
    commandId: "squash.minimize",
    leadingIcon: "fas fa-compress"
  }), e.menu.registerItem({
    type: "RequestRow",
    commandId: "squash.minimize",
    leadingIcon: "fas fa-compress"
  });
}
export {
  t as init
};
