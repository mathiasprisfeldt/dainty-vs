const { checkColorScaleRange } = require("dainty-shared").colors;
const { toRGBString } = require("../conversions");

function getIndentGuidesCustomizations(configuration, colors) {
  const { editor } = configuration;
  const { neutral, purple } = colors;

  function edbl(index) {
    return checkColorScaleRange(index + editor.backgroundLightness);
  }

  return [
    ["DEFAULT_DEFAULT_LINE_COLOR", toRGBString(neutral[edbl(4)])],
    ["DEFAULT_DEFAULT_HIGHLIGHT_COLOR", toRGBString(neutral[edbl(6)])],
    ["DEFAULT_UNALIGNED_LINE_COLOR", toRGBString(purple[39])],
    ["DEFAULT_UNALIGNED_HIGHLIGHT_COLOR", toRGBString(purple[39])]
  ];
}

module.exports = {
  getIndentGuidesCustomizations
};
