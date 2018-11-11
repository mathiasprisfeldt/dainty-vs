const { toRGBString } = require("../utils");

function getIndentGuidesReplacements(_configuration, colors) {
  const { blueGrays } = colors;

  return [
    ["DEFAULT_DEFAULT_LINE_COLOR", toRGBString(blueGrays[2])],
    ["DEFAULT_DEFAULT_HIGHLIGHT_COLOR", toRGBString(blueGrays[4])],
    ["DEFAULT_UNALIGNED_LINE_COLOR", toRGBString(colors.purpleLight)],
    ["DEFAULT_UNALIGNED_HIGHLIGHT_COLOR", toRGBString(colors.purpleLight)]
  ];
}

module.exports = {
  getIndentGuidesReplacements
};
