const { toRGBString } = require("../conversions");

function getIndentGuidesCustomizations(getColor, getTypeShade) {
  return [
    [
      "DEFAULT_DEFAULT_LINE_COLOR",
      toRGBString(getColor("neutral", getTypeShade(2)))
    ],
    [
      "DEFAULT_DEFAULT_HIGHLIGHT_COLOR",
      toRGBString(getColor("neutral", getTypeShade(2)))
    ],
    [
      "DEFAULT_UNALIGNED_LINE_COLOR",
      toRGBString(getColor("red", getTypeShade(8)))
    ],
    [
      "DEFAULT_UNALIGNED_HIGHLIGHT_COLOR",
      toRGBString(getColor("red", getTypeShade(8)))
    ]
  ];
}

module.exports = {
  getIndentGuidesCustomizations
};
