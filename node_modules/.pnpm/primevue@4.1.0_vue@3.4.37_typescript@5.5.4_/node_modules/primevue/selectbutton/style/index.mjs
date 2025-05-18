import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-selectbutton {\n    display: inline-flex;\n    user-select: none;\n    vertical-align: bottom;\n    outline-color: transparent;\n    border-radius: ".concat(dt('selectbutton.border.radius'), ";\n}\n\n.p-selectbutton .p-togglebutton {\n    border-radius: 0;\n    border-width: 1px 1px 1px 0;\n}\n\n.p-selectbutton .p-togglebutton:focus-visible {\n    position: relative;\n    z-index: 1;\n}\n\n.p-selectbutton .p-togglebutton:first-child {\n    border-left-width: 1px;\n    border-top-left-radius: ").concat(dt('selectbutton.border.radius'), ";\n    border-bottom-left-radius: ").concat(dt('selectbutton.border.radius'), ";\n}\n\n.p-selectbutton .p-togglebutton:last-child {\n    border-top-right-radius: ").concat(dt('selectbutton.border.radius'), ";\n    border-bottom-right-radius: ").concat(dt('selectbutton.border.radius'), ";\n}\n\n.p-selectbutton.p-invalid {\n    outline: 1px solid ").concat(dt('selectbutton.invalid.border.color'), ";\n    outline-offset: 0;\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-selectbutton p-component', {
      'p-invalid': props.invalid
    }];
  }
};
var SelectButtonStyle = BaseStyle.extend({
  name: 'selectbutton',
  theme: theme,
  classes: classes
});

export { SelectButtonStyle as default };
//# sourceMappingURL=index.mjs.map
