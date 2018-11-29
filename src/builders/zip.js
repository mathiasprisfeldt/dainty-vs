const { transformTheme } = require("../transformers/theme");
const { transformSettings } = require("../transformers/settings");
const { zip } = require("dainty-shared").utils;

async function buildThemeZip(configuration, colors, colorConstants) {
  const [[_, vstheme], vssettings] = await Promise.all([
    transformTheme(configuration, colors, colorConstants),
    transformSettings(configuration, colors)
  ]);

  return zip([["dainty.vstheme", vstheme], ["dainty.vssettings", vssettings]]);
}

module.exports = {
  buildThemeZip
};
