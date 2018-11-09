const { getConfigurationJson } = require("./configuration");
const { buildThemeFiles, buildIndex, buildCoverage } = require("./build");
const { defaultColors, generateColorPalette } = require("./colors");

(async () => {
  const [error, configuration] = await getConfigurationJson();

  if (error) {
    console.error(error);
    return;
  }

  const colors = generateColorPalette(defaultColors, configuration);

  await Promise.all([
    buildThemeFiles(configuration, colors),
    buildIndex(colors)
  ]);

  await buildCoverage(colors);
})();
