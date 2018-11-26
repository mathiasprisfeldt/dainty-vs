const parseArgs = require("minimist");
const { getConfiguration } = require("dainty-shared").configuration;
const {
  generateColorPalette,
  getColorsCountByScale,
  trackColorsCount
} = require("dainty-shared").colors;
const { buildThemeFiles } = require("./builders/files");
const {
  buildIndexPage,
  buildColorsPage,
  buildCoveragePage,
  buildSyntaxPage
} = require("./builders");

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

  const colors = generateColorPalette(configuration);

  trackColorsCount(true);
  await buildThemeFiles(__dirname, configuration, colors);
  trackColorsCount(false);

  await Promise.all([
    buildIndexPage(__dirname, colors, getColorsCountByScale(c => c.count > 4)),
    buildSyntaxPage(__dirname, colors),
    buildColorsPage(__dirname, colors)
  ]);

  await buildCoveragePage(__dirname, colors);
})();
