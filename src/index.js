const parseArgs = require("minimist");
const { getConfiguration } = require("dainty-shared").configuration;
const {
  generateColorScales,
  generateColorConstants
} = require("dainty-shared").colors;
const { buildThemeFiles } = require("./builders/files");
const { buildColorsPage, buildCoveragePage } = require("./builders");

(async () => {
  const argv = parseArgs(process.argv.slice(2));

  let configuration;

  try {
    configuration = await getConfiguration(__dirname, argv.preset || argv.p);
  } catch (error) {
    console.error(error);
    return;
  }

  if (configuration === null) {
    return;
  }

  const colors = generateColorScales(configuration);
  const colorConstants = generateColorConstants(colors);

  await buildThemeFiles(__dirname, configuration, colors, colorConstants);
})();
