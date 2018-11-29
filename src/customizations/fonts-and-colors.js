const { checkColorScaleRange } = require("dainty-shared").colors;
const { RGBToBGR } = require("../colors-vs");

function getFontsAndColorsCustomizations(configuration, colors) {
  const { editor } = configuration;
  const { blueGray, blue, blueLessChroma } = colors;
  const dark = configuration.variant === "dark";

  function edbl(index) {
    return checkColorScaleRange(index + editor.backgroundLightness);
  }

  function edfl(index) {
    return checkColorScaleRange(index + editor.foregroundLightness);
  }

  function r(str) {
    return RGBToBGR(str)
      .replace("#", "")
      .toUpperCase();
  }

  return [
    ["OUTLINING_SQUARE_FOREGROUND", r(blueGray[edbl(4)])],
    ["OUTLINING_VERTICAL_RULE_FOREGROUND", r(blueGray[edbl(4)])],
    ["LINE_NUMBER_FOREGROUND", r(blueGray[edfl(12)])],
    ["BLOCK_STRUCTURE_ADORNMENTS_BACKGROUND", r(blueGray[edbl(4)])],
    ["HTML_SERVER_SIDE_SCRIPT_FOREGROUND", r(blue[24])],
    ["HTML_SERVER_SIDE_SCRIPT_BACKGROUND", r(blueGray[edbl(4)])],
    ["RAZOR_CODE_BACKGROUND", r(blueGray[edbl(1)])],
    ["SELECTED_TEXT_BACKGROUND", r(blueLessChroma[16])],
    ["EDITOR_FONT_FAMILY", configuration.editor.fontFamily],
    ["BRACE_MATCHING_FOREGROUND", r(blueLessChroma[36])],
    ["BRACE_MATCHING_BACKGROUND", r(blueLessChroma[edbl(4)])],
    ["CURRENT_LINE_FOREGROUND", r(blueGray[edbl(0)])],
    ["CURRENT_LINE_BACKGROUND", r(blueGray[edbl(6)])],
    [
      "XML_ATTRIBUTE_VALUE_FOREGROUND",
      r(dark ? colors.orange[33] : colors.orange[18])
    ],
    [
      "XML_ATTRIBUTE_QUOTES_FOREGROUND",
      r(dark ? colors.orange[33] : colors.orange[18])
    ]
  ];
}

module.exports = {
  getFontsAndColorsCustomizations
};
