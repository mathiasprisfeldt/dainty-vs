const path = require("path");
const util = require("util");
const fs = require("fs");
const { applyReplacements, logTransform } = require("dainty-shared").utils;
const {
  generateColorConstantReplacements,
  getColorScaleName
} = require("dainty-shared").colors;
const { getDaintyCss } = require("dainty-shared").daintyCss;

const readFile = util.promisify(fs.readFile);

async function transformIndexPage(colors, colorsCountByScale) {
  const source = path.join(__dirname, "../../templates/index.html");

  logTransform(source);

  let content = (await readFile(source, "utf8")).replace(
    "/* INSERT_DAINTY_CSS */",
    await getDaintyCss()
  );

  let html = [`<div class="color-palette">`];

  for (scale of Object.keys(colorsCountByScale)) {
    html.push(
      `<div class="scale">
        <h4>${getColorScaleName(scale)}</h4>
        <div class="swatch-group">`
    );

    for (colorCount of colorsCountByScale[scale]) {
      const style = `background-color: "${colorCount.color}"`;
      html.push(`<div class="swatch" style="${style}"></div>`);
    }

    html.push(`</div></div>`);
  }

  html.push(`</div>`);

  content = content.replace("<!-- INSERT_COLORS -->", html.join("\n"));

  return applyReplacements(content, generateColorConstantReplacements(colors));
}

module.exports = {
  transformIndexPage
};
