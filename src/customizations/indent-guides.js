const { toRGBString } = require("../conversions");

function getIndentGuidesCustomizations(configuration, colors, getTypeShade) {
  const { neutral, purple } = colors;

  return [
    ["DEFAULT_DEFAULT_LINE_COLOR", toRGBString(neutral[getTypeShade(4)])],
    ["DEFAULT_DEFAULT_HIGHLIGHT_COLOR", toRGBString(neutral[getTypeShade(6)])],
    ["DEFAULT_UNALIGNED_LINE_COLOR", toRGBString(purple[getTypeShade(39)])],
    ["DEFAULT_UNALIGNED_HIGHLIGHT_COLOR", toRGBString(purple[getTypeShade(39)])]
  ];
}

module.exports = {
  getIndentGuidesCustomizations
};
