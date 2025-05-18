import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-iftalabel {\n    display: block;\n    position: relative;\n}\n\n.p-iftalabel label {\n    position: absolute;\n    pointer-events: none;\n    top: ".concat(dt('iftalabel.top'), ";\n    transition-property: all;\n    transition-timing-function: ease;\n    line-height: 1;\n    font-size: ").concat(dt('iftalabel.font.size'), ";\n    font-weight: ").concat(dt('iftalabel.font.weight'), ";\n    left: ").concat(dt('iftalabel.position.x'), ";\n    color: ").concat(dt('iftalabel.color'), ";\n    transition-duration: ").concat(dt('iftalabel.transition.duration'), ";\n}\n\n.p-iftalabel .p-inputtext,\n.p-iftalabel .p-textarea,\n.p-iftalabel .p-select-label,\n.p-iftalabel .p-multiselect-label,\n.p-iftalabel .p-autocomplete-input-multiple,\n.p-iftalabel .p-cascadeselect-label,\n.p-iftalabel .p-treeselect-label {\n    padding-top: ").concat(dt('iftalabel.input.padding.top'), ";\n    padding-bottom: ").concat(dt('iftalabel.input.padding.bottom'), ";\n}\n\n.p-iftalabel:has(.p-invalid) label {\n    color: ").concat(dt('iftalabel.invalid.color'), ";\n}\n\n.p-iftalabel:has(input:focus) label ,\n.p-iftalabel:has(input:-webkit-autofill) label,\n.p-iftalabel:has(textarea:focus) label ,\n.p-iftalabel:has(.p-inputwrapper-focus) label  {\n    color: ").concat(dt('iftalabel.focus.color'), ";\n}\n\n.p-iftalabel .p-inputicon {\n    top: ").concat(dt('iftalabel.input.padding.top'), ";\n    transform: translateY(25%);\n    margin-top: 0;\n}\n\n/*.p-iftalabel .p-placeholder,\n.p-iftalabel input::placeholder,\n.p-iftalabel .p-inputtext::placeholder {\n    opacity: 0;\n    transition-property: all;\n    transition-timing-function: ease;\n}\n\n.p-iftalabel .p-focus .p-placeholder,\n.p-iftalabel input:focus::placeholder,\n.p-iftalabel .p-inputtext:focus::placeholder {\n    opacity: 1;\n    transition-property: all;\n    transition-timing-function: ease;\n}*/\n");
};
var classes = {
  root: 'p-iftalabel'
};
var IftaLabelStyle = BaseStyle.extend({
  name: 'iftalabel',
  theme: theme,
  classes: classes
});

export { IftaLabelStyle as default };
//# sourceMappingURL=index.mjs.map
