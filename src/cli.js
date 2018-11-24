const { getConfigurationJson } = require("./configuration");
const {
  buildThemeFiles,
  buildIndexPage,
  buildColorsPage,
  buildCoveragePage,
  buildDaintyCssPage,
  buildSyntaxPage,
  buildDaintyCss
} = require("./build");
const {
  generateColorPalette,
  getColorsCountByScale,
  trackColorsCount
} = require("./colors");

(async () => {
  let filename;
  let type;

  if (process.argv[2] === "-p" || process.argv[2] === "--preset") {
    type = "CONFIGURATION_PRESET";
    filename = `presets/${process.argv[3]}.json`;
  } else if (process.argv[2] === "-c" || process.argv[2] === "--vscode-theme") {
    type = "VSCODE_THEME";
    filename = `vscode-themes/${process.argv[3]}.color-theme.json`;
  }

  const [error, configuration] = await getConfigurationJson(type, filename);

  if (error) {
    console.error(error);
    return;
  }

  const colors = generateColorPalette(configuration);

  trackColorsCount(true);
  await buildThemeFiles(configuration, colors);
  trackColorsCount(false);

  await Promise.all([
    buildIndexPage(colors, getColorsCountByScale()),
    buildSyntaxPage(colors),
    buildColorsPage(colors),
    buildDaintyCssPage(colors),
    buildDaintyCss(colors)
  ]);

  await buildCoveragePage(colors);
})();
