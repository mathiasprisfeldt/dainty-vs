const path = require("path");
const util = require("util");
const fs = require("fs");
const changeCase = require("change-case");
const { applyReplacements } = require("dainty-shared").utils;
const { generateColorConstantReplacements } = require("dainty-shared").colors;
const { getDaintyCss } = require("dainty-shared").daintyCss;
const { logTransform } = require("dainty-shared").utils;

const readFile = util.promisify(fs.readFile);

async function transformColorsPage(colors) {
  const source = path.join(__dirname, "../../sources/colors.html");

  logTransform(source);

  let html = [];

  for (color of Object.keys(colors)) {
    html.push(`
      <section>
        <h2><code>${color}</code></h2>
        <table>
          <thead>
            <tr>
              <th width="20%">Index</th>
              <th width="20%">Swatch</th>
              <th width="20%">Text</th>
              <th width="20%">Hex</th>
              <th width="20%">Constant</th>
            </tr>
          </thead>
          <tbody>
    `);

    for ([index, shade] of colors[color].entries()) {
      let mod = [];

      if (index % 2 == 0) {
        mod.push("mod-2");
      }

      if (index % 4 == 0) {
        mod.push("mod-4");
      }

      if (index % 8 == 0) {
        mod.push("mod-8");
      }

      html.push(
        `<tr class="mod mod-1 ${mod.join(" ")}">
          <td>${index}</td>
          <td width="20%">
            <div class="swatch" style="background-color: ${shade}"></div>
          </td>
          <td width="20%">
            <div style="color: ${shade}">Lorem ipsum</div>
          </td>
          <td width="20%"><code>${shade}</code></td>
          <td width="20%">
            <code>${color}${index}</code>
          </td>
        </tr>`
      );
    }

    html.push(`</tbody></table></section>`);
  }

  content = (await readFile(source, "utf8")).replace(
    "/* INSERT_DAINTY_CSS */",
    await getDaintyCss()
  );

  return applyReplacements(
    content,
    generateColorConstantReplacements(colors)
  ).replace("<!-- INSERT_CONTENT -->", html.join("\n"));
}

module.exports = {
  transformColorsPage
};
