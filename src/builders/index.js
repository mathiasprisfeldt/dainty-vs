const path = require("path");
const { transformColorsPage } = require("../transformers/pages/colors");
const { transformCoveragePage } = require("../transformers/pages/coverage");
const { writeFileLog } = require("dainty-shared").utils;

async function buildColorsPage(dirname, colors) {
  const target = path.join(dirname, "../public/colors.html");
  const data = await transformColorsPage(colors);
  writeFileLog(target, data);
}

async function buildCoveragePage(dirname, colors) {
  const target = path.join(dirname, "../public/coverage.html");
  const data = await transformCoveragePage(colors);
  writeFileLog(target, data);
}

module.exports = {
  buildColorsPage,
  buildCoveragePage
};
