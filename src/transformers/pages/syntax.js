const path = require("path");
const util = require("util");
const fs = require("fs");
const { applyReplacements } = require("dainty-shared").utils;
const { generateColorConstantReplacements } = require("dainty-shared").colors;
const { getDaintyCss } = require("dainty-shared").daintyCss;

const readFile = util.promisify(fs.readFile);

async function transformSyntaxPage(colors) {
  const source = path.join(__dirname, "../../templates/syntax.html");

  console.log(`Transforming \`${source}\`…`);

  content = (await readFile(source, "utf8")).replace(
    "/* INSERT_DAINTY_CSS */",
    await getDaintyCss()
  );

  return applyReplacements(content, generateColorConstantReplacements(colors));
}

module.exports = {
  transformSyntaxPage
};
