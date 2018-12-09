const { cloneDeep } = require("dainty-shared").utils;
const {
  generateColorConstantReplacements,
  applyColorConstantReplacements,
  isHexColor
} = require("dainty-shared").colors;

function getCategoriesCustomizations(
  configuration,
  colors,
  getProperty,
  getTypeShade
) {
  const { neutral } = colors;

  const replacements = {
    Environment: {
      MainWindowActiveIconDefault: [getProperty("accent1"), null],
      MainWindowActiveIconBuilding: [getProperty("accent1"), null],
      MainWindowActiveIconDebugging: [getProperty("accent1"), null],
      MainWindowActiveIconNoSolution: [getProperty("accent1"), null],
      RaftedWindowActiveIconDefault: [getProperty("accent1"), null],
      RaftedWindowActiveIconBuilding: [getProperty("accent1"), null],
      RaftedWindowActiveIconDebugging: [getProperty("accent1"), null],
      RaftedWindowActiveIconNoSolution: [getProperty("accent1"), null],
      RaftedWindowInactiveIconDefault: [getProperty("accent1"), null],
      RaftedWindowInactiveIconBuilding: [getProperty("accent1"), null],
      RaftedWindowInactiveIconDebugging: [getProperty("accent1"), null],
      StartPageTextControlLinkSelected: [getProperty("token.url"), null],
      StartPageTextControlLinkSelectedHover: [getProperty("token.url"), null]
    },
    "ColorizedSignatureHelp colors": {
      "HTML Attribute Value": [null, getProperty("token.string")],
      punctuation: [null, getProperty("token.punctuation")],
      urlformat: [null, getProperty("token.url")],
      "Preprocessor Keyword": [null, getProperty("token.operator")]
    },
    "Text Editor Text Marker Items": {
      "Current Statement": ["#eff284", null] // Revert
    },
    VisualStudioInstaller: {
      Background: [neutral[getTypeShade(39)], null]
    }
  };

  return mergeConfigurationCategoriesCustomizations(
    replacements,
    configuration,
    colors
  );
}

function getSearchReplaceCustomizations(
  configuration,
  colors,
  getProperty,
  getTypeShade
) {
  const { environment } = configuration;
  const { blue, neutral, green, orange } = colors;

  const replacements = [
    //
    // Backgrounds
    //

    // Active tab, statusbar
    ["#007acc", neutral[getTypeShade(6)]],

    // Menu bar item hover
    ["#3e3e40", neutral[getTypeShade(6)]],

    // Menu
    ["#1b1b1c", neutral[getTypeShade(2)]],

    // Menu item hover
    ["#333334", neutral[getTypeShade(6)]],

    // Hover tab
    ["#1c97ea", neutral[getTypeShade(4)]],

    // Inactive tab hover close
    ["#52b0ef", neutral[getTypeShade(8)]],

    // Inactive tab active close
    ["#0e6198", neutral[getTypeShade(10)]],

    // Editor
    ["#1e1e1e", neutral[getTypeShade(0)]],

    // Toolbar separator
    ["#222222", neutral[getTypeShade(0)]],

    // Solution Explorer, Properties
    ["#252526", neutral[getTypeShade(0)]],

    // Title bar, menu bar
    ["#2d2d30", neutral[getTypeShade(2)]],

    // Breakpoints bar
    ["#333333", neutral[getTypeShade(1)]],

    // Search Solution Explorer, Quick Launch, Package Manager, menu separator line and borders around menu/menu item
    ["#333337", neutral[getTypeShade(0)]],

    // Scrollbar containers
    [
      "#3e3e42",
      environment.transparentScrollbarContainers
        ? neutral[getTypeShade(0)]
        : neutral[getTypeShade(1)]
    ],

    // Scrollbar
    [
      "#686868",
      environment.additionalScrollbarsContrast
        ? neutral[getTypeShade(6)]
        : neutral[getTypeShade(4)]
    ],

    // Scrollbar hover
    [
      "#9e9e9e",
      environment.additionalScrollbarsContrast
        ? neutral[getTypeShade(8)]
        : neutral[getTypeShade(6)]
    ],

    // Scrollbar active
    [
      "#efebef",
      environment.additionalScrollbarsContrast
        ? neutral[getTypeShade(10)]
        : neutral[getTypeShade(8)]
    ],

    // Scrollbar glyph disabled
    ["#555558", neutral[getTypeShade(4)]],

    // Selected item in Solution Explorer, thin borders across app
    [
      "#3f3f46",
      environment.transparentBorders
        ? neutral[getTypeShade(2)]
        : neutral[getTypeShade(4)]
    ],

    // Package Manger border
    ["#434346", neutral[getTypeShade(8)]],

    // Current line border
    ["#464646", neutral[getTypeShade(2)]],

    // Grip – inactive tool window
    [
      "#46464a",
      environment.transparentToolWindowGrips
        ? neutral[getTypeShade(2)]
        : neutral[getTypeShade(8)]
    ],

    // Grip – active tool window
    [
      "#59a8de",
      environment.transparentToolWindowGrips
        ? neutral[getTypeShade(4)]
        : neutral[getTypeShade(16)]
    ],

    // File changes indicator, current debugging statement
    ["#eff284", neutral[getTypeShade(2)]],

    // File changes after save indicator
    ["#577430", neutral[getTypeShade(2)]],

    // Outline area
    ["#232323", neutral[getTypeShade(2)]],

    // File preview
    ["#68217a", blue[getTypeShade(0)]],

    // Tooltip
    ["#424245", neutral[getTypeShade(2)]],

    // Tooltip border
    ["#4d4d50", neutral[getTypeShade(2)]],

    // Extensions item hover
    ["#3f3f40", neutral[getTypeShade(2)]],

    // Yellowy tooltip line
    ["#fefcc8", orange[getTypeShade(39)]],

    // Start page arrow
    ["#4f4f53", blue[getTypeShade(16)]],

    // Start page arrow hover
    ["#606060", blue[getTypeShade(20)]],

    // Notification badge
    ["#8631c7", getProperty("accent0")],

    // `100%` box arrow hover
    ["#1f1f20", neutral[getTypeShade(16)]],

    // Inactive tool window glyph hover
    ["#393939", neutral[getTypeShade(4)]],

    // Team Explorer `Changes` label
    ["#2d2d2d", neutral[getTypeShade(4)]],

    // Team Explorer `Changes` label icon
    ["#3d3d3d", neutral[getTypeShade(8)]],

    // Team Explorer `Changes` label icon hover
    ["#525252", neutral[getTypeShade(12)]],

    // Team Explorer `Changes` icon
    ["#c8c8c8", blue[getTypeShade(36)]],

    // Team Explorer `Settings` blue indicator
    ["#0079ce", blue[getTypeShade(20)]],

    // Team Explorer `Changes` red indicator
    ["#f05033", blue[getTypeShade(34, 16)]],

    // Diagnostic Tools tab hover
    ["#555555", neutral[getTypeShade(4)]],

    //
    // Foregrounds
    //

    // Editor tooltip
    ["#dadada", neutral[getTypeShade(32)]],

    // Start page `NEW`
    ["#ff8c00", green[getTypeShade(32)]],

    // Preview Selected Items border
    ["#3399ff", blue[getTypeShade(28)]],

    // `using`, `public class`
    ["#569cd6", getProperty("token.keyword")],

    // `form`, `option` (bold)
    ["#008080", getProperty("token.tag")],

    // `&nbsp;`
    ["#00a0a0", getProperty("token.type")],

    // `Program`, `WebHost`, `Startup`
    ["#4ec9b0", getProperty("token.type")],

    // HTML attribute
    ["#9cdcfe", getProperty("token.attributeName")],

    // Active tool window tab, `Import theme`
    ["#0097fb", neutral[getTypeShade(32)]],

    // JSON property
    ["#d7ba7d", getProperty("token.property")],

    // Punctuation, method names
    ["#dcdcdc", getProperty("token.other")],

    // Status bar, Visual Studio logo, active tab, selected Solution Explorer item
    ["#ffffff", getProperty("accent2")],

    // Close and pin icons on active tab
    ["#d0e6f5", neutral[getTypeShade(32)]],

    // `<` and `>`
    ["#808080", getProperty("token.punctuation")],

    // Operator and HTML operator
    ["#b4b4b4", getProperty("token.operator")],

    // Most UI text (menu bar items, tabs, non-selected tabs, console output, Solution Explorer item …)
    ["#f1f1f1", neutral[getTypeShade(32)]],

    // Inactive tabs in tool windows, tool window titles
    ["#d0d0d0", neutral[getTypeShade(26)]],

    // `Microsoft Visual Studio`
    ["#999999", neutral[getTypeShade(22)]],

    // Disabled menu item
    ["#656565", neutral[getTypeShade(18)]],

    // Inactive tabs hover in tool windows
    ["#55aaff", neutral[getTypeShade(32)]],

    // Comments
    ["#57a64a", getProperty("token.comment")],

    // XML doc comment
    ["#608b4e", getProperty("token.comment")],

    // Numbers
    ["#b5cea8", getProperty("token.number")],

    // `IWebHostBuilder`
    ["#b8d7a3", getProperty("token.otherType")],

    // Less variable
    ["#c563bd", getProperty("token.otherType")],

    // Strings
    ["#d69d85", getProperty("token.string")],

    // Start page heading
    ["#84ceff", getProperty("token.type")],

    // `Import Theme` hover
    ["#88ccfe", neutral[getTypeShade(36)]]
  ];

  return mergeConfigurationSearchReplaceCustomizations(
    replacements,
    configuration,
    colors
  );
}

function mergeConfigurationCategoriesCustomizations(
  existingReplacements,
  configuration,
  colors
) {
  let resultReplacements = cloneDeep(existingReplacements);
  const { __categories: categories } = configuration.customizations;
  const colorReplacements = generateColorConstantReplacements(colors, false);
  const colorReplacementsKeys = colorReplacements.map(r => r[0]);

  for (const categoryKey of Object.keys(categories)) {
    const category = categories[categoryKey];

    if (!resultReplacements[categoryKey]) {
      resultReplacements[categoryKey] = {};
    }

    for (const colorGroupKey of Object.keys(category)) {
      const colorGroup = category[colorGroupKey];

      if (!(Array.isArray(colorGroup) && colorGroup.length === 2)) {
        throw new Error(
          `Value of category replacement \`${colorGroupKey}\` in \`configuration.json\` must be an array with length of 2. The first value is a tuple with background and text color for the dark type. The second value is a tuple with background and text color for the light type. Each colors must either be a color hex value or a Dainty color constant.`
        );
      }

      const darkColors = colorGroup[0];
      const lightColors = colorGroup[1];

      if (!(Array.isArray(darkColors) && darkColors.length === 2)) {
        throw new Error(
          `Array index 0 of category replacement color group \`${colorGroupKey}\` in \`configuration.json\` must be an array with length of 2. The first value is the background color for the dark type. The second value is the text color for the dark type. Each colors must either be a color hex value or a Dainty color constant.`
        );
      }

      if (!(Array.isArray(lightColors) && lightColors.length === 2)) {
        throw new Error(
          `Array index 1 of category replacement color group \`${colorGroupKey}\` in \`configuration.json\` must be an array with length of 2. The first value is the background color for the light type. The second value is the text color for the light type. Each colors must either be a color hex value or a Dainty color constant.`
        );
      }

      if (
        !(
          darkColors[0] === null ||
          isHexColor(darkColors[0]) ||
          colorReplacementsKeys.includes(darkColors[0])
        )
      ) {
        throw new Error(
          `Array index 0 of category replacement color group  \`${colorGroupKey}\` for dark type in \`configuration.json\` is not valid. The value must either be a color hex value or a Dainty color constant.`
        );
      }

      if (
        !(
          darkColors[1] === null ||
          isHexColor(darkColors[1]) ||
          colorReplacementsKeys.includes(darkColors[1])
        )
      ) {
        throw new Error(
          `Array index 1 of category replacement color group  \`${colorGroupKey}\` for dark type in \`configuration.json\` is not valid. The value must either be a color hex value or a Dainty color constant.`
        );
      }

      if (
        !(
          lightColors[0] === null ||
          isHexColor(lightColors[0]) ||
          colorReplacementsKeys.includes(lightColors[0])
        )
      ) {
        throw new Error(
          `Array index 0 of category replacement color group  \`${colorGroupKey}\` for light type in \`configuration.json\` is not valid. The value must either be a color hex value or a Dainty color constant.`
        );
      }

      if (
        !(
          lightColors[1] === null ||
          isHexColor(lightColors[1]) ||
          colorReplacementsKeys.includes(lightColors[1])
        )
      ) {
        throw new Error(
          `Array index 1 of category replacement color group  \`${colorGroupKey}\` for light type in \`configuration.json\` is not valid. The value must either be a color hex value or a Dainty color constant.`
        );
      }

      const typeIndex = configuration.type === "dark" ? 0 : 1;
      resultReplacements[categoryKey][colorGroupKey] = colorGroup[typeIndex];
    }
  }

  return resultReplacements;
}

function mergeConfigurationSearchReplaceCustomizations(
  existingReplacements,
  configuration,
  colors
) {
  let resultReplacements = cloneDeep(existingReplacements);
  const { __searchReplace: replacements } = configuration.customizations;
  const colorReplacements = generateColorConstantReplacements(colors, false);
  const colorReplacementsKeys = colorReplacements.map(c => c[0]);
  const existingReplacementsKeys = existingReplacements.map(c => c[0]);

  for (const replacement of Object.keys(replacements)) {
    if (!isHexColor(replacement)) {
      throw new Error(
        `Search–replace-replacement \`${replacement}\` in \`configuration.json\` is not a valid color hex value.`
      );
    }

    if (
      !(
        Array.isArray(replacements[replacement]) &&
        replacements[replacement].length === 2
      )
    ) {
      throw new Error(
        `Value of search–replace replacement \`${replacement}\` in \`configuration.json\` must be an array with length of 2. The first value is a color hex value or Dainty color constant for the dark type. The second value is a color hex value or Dainty color constant for the light type.`
      );
    }

    if (
      !(
        replacements[replacement][0] === null ||
        isHexColor(replacements[replacement][0]) ||
        colorReplacementsKeys.includes(replacements[replacement][0])
      )
    ) {
      throw new Error(
        `Array index 0 of search–replace replacement \`${replacement}\` in \`configuration.json\` must either be a hex color value or a Dainty color constant.`
      );
    }

    if (
      !(
        replacements[replacement][1] === null ||
        isHexColor(replacements[replacement][1]) ||
        colorReplacementsKeys.includes(replacements[replacement][1])
      )
    ) {
      throw new Error(
        `Array index 1 of search–replace-replacement \`${replacement}\` in \`configuration.json\` must either be a hex color value or a Dainty color constant.`
      );
    }

    const typeIndex = configuration.type === "dark" ? 0 : 1;

    if (existingReplacementsKeys.includes(replacement)) {
      const index = resultReplacements.findIndex(r => r[0] === replacement);

      resultReplacements[index] = [
        replacement,
        applyColorConstantReplacements(
          replacements[replacement][typeIndex],
          colorReplacements,
          colorReplacementsKeys
        )
      ];
    } else {
      resultReplacements.push([
        replacement,
        applyColorConstantReplacements(
          replacements[replacement][typeIndex],
          colorReplacements,
          colorReplacementsKeys
        )
      ]);
    }
  }

  return resultReplacements;
}

module.exports = {
  getCategoriesCustomizations,
  getSearchReplaceCustomizations
};
