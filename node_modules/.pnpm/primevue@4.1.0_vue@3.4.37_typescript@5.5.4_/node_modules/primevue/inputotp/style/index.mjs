import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  _ref.dt;
  return "\n.p-inputotp {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.p-inputotp-input {\n    text-align: center;\n    width: 2.5rem;\n}\n";
};
var classes = {
  root: 'p-inputotp p-component',
  pcInputText: 'p-inputotp-input'
};
var InputOtpStyle = BaseStyle.extend({
  name: 'inputotp',
  theme: theme,
  classes: classes
});

export { InputOtpStyle as default };
//# sourceMappingURL=index.mjs.map
