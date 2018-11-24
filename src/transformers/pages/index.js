const path = require("path");
const util = require("util");
const fs = require("fs");
const { applyReplacements } = require("../../utils");
const {
  generateColorConstantReplacements,
  getScaleName
} = require("../../colors");
const changeCase = require("change-case");

const readFile = util.promisify(fs.readFile);

async function transformIndexPage(colors, colorsCountByScale) {
  const source = path.join(__dirname, "../../templates/index.html");
  const daintyCss = path.join(__dirname, "../../templates/dainty.css");

  console.log(`Transforming \`${source}\`…`);

  let content = (await readFile(source, "utf8")).replace(
    "/* INSERT_DAINTY_CSS */",
    await readFile(daintyCss, "utf8")
  );

  let html = [`<div class="color-palette">`];

  for (scale of Object.keys(colorsCountByScale)) {
    html.push(
      `<div class="scale">
        <h4>${getScaleName(scale)}</h4>
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
