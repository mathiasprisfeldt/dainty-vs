const parseArgs = require("minimist");
const { getConfiguration } = require("dainty-shared").configuration;
const {
  generateColorPalette,
  getColorsCountByScale,
  trackColorsCount
} = require("dainty-shared").colors;
const {
  buildThemeFiles,
  buildIndexPage,
  buildColorsPage,
  buildCoveragePage,
  buildSyntaxPage
} = require("./build");

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
  await buildThemeFiles(configuration, colors);
  trackColorsCount(false);

  await Promise.all([
    buildIndexPage(colors, getColorsCountByScale(c => c.count > 4)),
    buildSyntaxPage(colors),
    buildColorsPage(colors)
  ]);

  await buildCoveragePage(colors);
})();
