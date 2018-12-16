const path = require("path");
const util = require("util");
const fs = require("fs");
const replaceOnce = require("replace-once");
const convert = require("xml-js");
const {
  getFontsAndColorsCustomizations
} = require("../customizations/fonts-and-colors");
const { logTransform } = require("dainty-shared/src/utils");
const {
  getColorFunction,
  getPropertyFunction,
  getTypeShadeFunction
} = require("dainty-shared/src/colors");

const readFile = util.promisify(fs.readFile);

async function transformFontsAndColors(configuration) {
  const source = path.join(__dirname, "../sources/fonts-and-colors.vssettings");

  logTransform(source);

  const replacements = getFontsAndColorsCustomizations(
    configuration,
    getColorFunction(configuration),
    getPropertyFunction(configuration, getColorFunction(configuration)),
    getTypeShadeFunction(configuration)
  );

  const find = replacements.map(r => r[0]);
  const replace = replacements.map(r => r[1]);

  const content = await readFile(source, "utf8");
  return convert.xml2js(replaceOnce(content, find, replace, "g"));
}

module.exports = {
  transformFontsAndColors
};
