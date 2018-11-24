const { toRGBString, checkScaleRange } = require("../colors");

function getIndentGuidesReplacements(configuration, colors) {
  const { editor } = configuration;
  const { blueGray, purple } = colors;
  const dark = configuration.variant === "dark";

  function edbl(index) {
    return checkScaleRange(index + editor.backgroundLightness);
  }

  return [
    ["DEFAULT_DEFAULT_LINE_COLOR", toRGBString(blueGray[edbl(4)])],
    ["DEFAULT_DEFAULT_HIGHLIGHT_COLOR", toRGBString(blueGray[edbl(6)])],
    ["DEFAULT_UNALIGNED_LINE_COLOR", toRGBString(purple[39])],
    ["DEFAULT_UNALIGNED_HIGHLIGHT_COLOR", toRGBString(purple[39])]
  ];
}

module.exports = {
  getIndentGuidesReplacements
};
