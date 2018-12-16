const path = require("path");
const util = require("util");
const fs = require("fs");
const replaceOnce = require("replace-once");
const convert = require("xml-js");
const {
  getIndentGuidesCustomizations
} = require("../customizations/indent-guides");
const { logTransform } = require("dainty-shared/src/utils");
const {
  getColorFunction,
  getTypeShadeFunction
} = require("dainty-shared/src/colors");

const readFile = util.promisify(fs.readFile);

async function transformIndentGuides(configuration) {
  const source = path.join(__dirname, "../sources/indent-guides.vssettings");

  logTransform(source);

  const replacements = getIndentGuidesCustomizations(
    getColorFunction(configuration),
    getTypeShadeFunction(configuration)
  );

  const find = replacements.map(r => r[0]);
  const replace = replacements.map(r => r[1]);

  const content = await readFile(source, "utf8");
  return convert.xml2js(replaceOnce(content, find, replace, "g"));
}

module.exports = {
  transformIndentGuides
};
