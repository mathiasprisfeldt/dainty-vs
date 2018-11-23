const path = require("path");
const util = require("util");
const fs = require("fs");
const { applyReplacements } = require("../utils");
const { generateColorConstantReplacements } = require("../colors");

const readFile = util.promisify(fs.readFile);

async function transformDaintyCss(colors) {
  const source = path.join(__dirname, "../templates/dainty.css");

  console.log(`Transforming \`${source}\`…`);

  return applyReplacements(
    await readFile(source, "utf8"),
    generateColorConstantReplacements(colors)
  );
}

module.exports = {
  transformDaintyCss
};
