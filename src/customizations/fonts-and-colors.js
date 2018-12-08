const { RGBToBGR } = require("../conversions");

function getFontsAndColorsCustomizations(
  configuration,
  colors,
  getTypeShade,
  getTokenColor
) {
  const { neutral, blue, blueLessChroma } = colors;

  function r(str) {
    return RGBToBGR(str)
      .replace("#", "")
      .toUpperCase();
  }

  return [
    ["OUTLINING_SQUARE_FOREGROUND", r(neutral[getTypeShade(4)])],
    ["OUTLINING_VERTICAL_RULE_FOREGROUND", r(neutral[getTypeShade(4)])],
    ["LINE_NUMBER_FOREGROUND", r(neutral[getTypeShade(12)])],
    ["BLOCK_STRUCTURE_ADORNMENTS_BACKGROUND", r(neutral[getTypeShade(4)])],
    ["HTML_SERVER_SIDE_SCRIPT_FOREGROUND", r(getTokenColor("operator"))],
    ["HTML_SERVER_SIDE_SCRIPT_BACKGROUND", r(neutral[getTypeShade(4)])],
    ["RAZOR_CODE_BACKGROUND", r(neutral[getTypeShade(1)])],
    ["SELECTED_TEXT_BACKGROUND", r(blueLessChroma[getTypeShade(16)])],
    ["EDITOR_FONT_FAMILY", configuration.editor.fontFamily],
    ["BRACE_MATCHING_FOREGROUND", r(blueLessChroma[getTypeShade(36)])],
    ["BRACE_MATCHING_BACKGROUND", r(blueLessChroma[getTypeShade(4)])],
    ["CURRENT_LINE_FOREGROUND", r(neutral[getTypeShade(0)])],
    ["CURRENT_LINE_BACKGROUND", r(neutral[getTypeShade(6)])],
    ["XML_ATTRIBUTE_VALUE_FOREGROUND", r(getTokenColor("string"))],
    ["XML_ATTRIBUTE_QUOTES_FOREGROUND", r(getTokenColor("string"))]
  ];
}

module.exports = {
  getFontsAndColorsCustomizations
};
