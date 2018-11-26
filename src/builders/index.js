const path = require("path");
const minify = require("html-minifier").minify;
const { transformColorsPage } = require("../transformers/pages/colors");
const { transformCoveragePage } = require("../transformers/pages/coverage");
const { transformIndexPage } = require("../transformers/pages/index");
const { transformSyntaxPage } = require("../transformers/pages/syntax");
const { writeFileLog } = require("dainty-shared").utils;

async function buildIndexPage(dirname, colors, colorsCountByScale) {
  const target = path.join(dirname, "../public/index.html");
  const data = await transformIndexPage(colors, colorsCountByScale);

  writeFileLog(
    target,
    minify(data, {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true
    })
  );
}

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

async function buildSyntaxPage(dirname, colors) {
  const target = path.join(dirname, "../public/syntax.html");
  const data = await transformSyntaxPage(colors);
  writeFileLog(target, data);
}

module.exports = {
  buildIndexPage,
  buildColorsPage,
  buildCoveragePage,
  buildSyntaxPage
};
