const path = require("path");
const { transformTheme } = require("../transformers/theme");
const { transformSettings } = require("../transformers/settings");
const { writeFileLog, createDistDirectory } = require("dainty-shared").utils;

async function buildThemeFiles(dirname, configuration, colors) {
  const vsthemeTarget = path.join(dirname, "../dist/dainty.vstheme");
  const vssettingsTarget = path.join(dirname, "../dist/dainty.vssettings");

  await createDistDirectory(dirname);

  const [[error, vstheme], vssettings] = await Promise.all([
    transformTheme(configuration, colors),
    transformSettings(configuration, colors)
  ]);

  if (error) {
    console.error(error);
    return;
  }

  await Promise.all([
    writeFileLog(vsthemeTarget, vstheme),
    writeFileLog(vssettingsTarget, vssettings)
  ]);
}

module.exports = {
  buildThemeFiles
};
