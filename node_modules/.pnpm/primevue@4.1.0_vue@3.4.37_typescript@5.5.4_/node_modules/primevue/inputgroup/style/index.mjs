import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-inputgroup,\n.p-inputgroup .p-floatlabel,\n.p-inputgroup .p-iftalabel {\n    display: flex;\n    align-items: stretch;\n    width: 100%;\n}\n\n.p-inputgroup .p-inputtext,\n.p-inputgroup .p-inputwrapper {\n    flex: 1 1 auto;\n    width: 1%;\n}\n\n.p-inputgroupaddon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: ".concat(dt('inputgroup.addon.padding'), ";\n    background: ").concat(dt('inputgroup.addon.background'), ";\n    color: ").concat(dt('inputgroup.addon.color'), ";\n    border-top: 1px solid ").concat(dt('inputgroup.addon.border.color'), ";\n    border-bottom: 1px solid ").concat(dt('inputgroup.addon.border.color'), ";\n    min-width: ").concat(dt('inputgroup.addon.min.width'), ";\n}\n\n.p-inputgroupaddon:first-child,\n.p-inputgroupaddon + .p-inputgroupaddon {\n    border-left: 1px solid ").concat(dt('inputgroup.addon.border.color'), ";\n}\n\n.p-inputgroupaddon:last-child {\n    border-right: 1px solid ").concat(dt('inputgroup.addon.border.color'), ";\n}\n\n.p-inputgroup > .p-component,\n.p-inputgroup > .p-inputwrapper > .p-component,\n.p-inputgroup > .p-floatlabel > .p-component,\n.p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,\n.p-inputgroup > .p-iftalabel > .p-component,\n.p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {\n    border-radius: 0;\n    margin: 0;\n}\n\n.p-inputgroupaddon:first-child,\n.p-inputgroup > .p-component:first-child,\n.p-inputgroup > .p-inputwrapper:first-child > .p-component,\n.p-inputgroup > .p-floatlabel:first-child > .p-component,\n.p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,\n.p-inputgroup > .p-iftalabel:first-child > .p-component,\n.p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {\n    border-top-left-radius: ").concat(dt('inputgroup.addon.border.radius'), ";\n    border-bottom-left-radius: ").concat(dt('inputgroup.addon.border.radius'), ";\n}\n\n.p-inputgroupaddon:last-child,\n.p-inputgroup > .p-component:last-child,\n.p-inputgroup > .p-inputwrapper:last-child > .p-component,\n.p-inputgroup > .p-floatlabel:last-child > .p-component,\n.p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,\n.p-inputgroup > .p-iftalabel:last-child > .p-component,\n.p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {\n    border-top-right-radius: ").concat(dt('inputgroup.addon.border.radius'), ";\n    border-bottom-right-radius: ").concat(dt('inputgroup.addon.border.radius'), ";\n}\n\n.p-inputgroup .p-component:focus,\n.p-inputgroup .p-component.p-focus,\n.p-inputgroup .p-inputwrapper-focus,\n.p-inputgroup .p-component:focus ~ label,\n.p-inputgroup .p-component.p-focus ~ label,\n.p-inputgroup .p-inputwrapper-focus ~ label {\n    z-index: 1;\n}\n\n.p-inputgroup > .p-button:not(.p-button-icon-only) {\n    width: auto;\n}\n");
};
var classes = {
  root: 'p-inputgroup'
};
var InputGroupStyle = BaseStyle.extend({
  name: 'inputgroup',
  theme: theme,
  classes: classes
});

export { InputGroupStyle as default };
//# sourceMappingURL=index.mjs.map
