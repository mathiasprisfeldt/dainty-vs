const { cloneDeep } = require("dainty-shared/src/utils");

function getCategoriesCustomizations(
  configuration,
  getColor,
  getProperty,
  getTypeShade
) {
  const customizations = {
    Environment: {
      MainWindowActiveIconDefault: [getColor("accent", getTypeShade(11)), null],
      MainWindowActiveIconBuilding: [
        getColor("accent", getTypeShade(11)),
        null
      ],
      MainWindowActiveIconDebugging: [
        getColor("accent", getTypeShade(11)),
        null
      ],
      MainWindowActiveIconNoSolution: [
        getColor("accent", getTypeShade(11)),
        null
      ],
      RaftedWindowActiveIconDefault: [
        getColor("accent", getTypeShade(11)),
        null
      ],
      RaftedWindowActiveIconBuilding: [
        getColor("accent", getTypeShade(11)),
        null
      ],
      RaftedWindowActiveIconDebugging: [
        getColor("accent", getTypeShade(11)),
        null
      ],
      RaftedWindowActiveIconNoSolution: [
        getColor("accent", getTypeShade(11)),
        null
      ],
      RaftedWindowInactiveIconDefault: [
        getColor("accent", getTypeShade(11)),
        null
      ],
      RaftedWindowInactiveIconBuilding: [
        getColor("accent", getTypeShade(11)),
        null
      ],
      RaftedWindowInactiveIconDebugging: [
        getColor("accent", getTypeShade(11)),
        null
      ],
      StartPageTextControlLinkSelected: [getProperty("token.url"), null],
      StartPageTextControlLinkSelectedHover: [getProperty("token.url"), null],
      StatusBarDefault: [
        getColor("neutral", getTypeShade(2)),
        getColor("neutral", getTypeShade(12))
      ],
      StatusBarBuilding: [
        getColor("blue", getTypeShade(2)),
        getColor("neutral", getTypeShade(12))
      ],
      StatusBarDebugging: [
        getColor("orangeMoreChroma", getTypeShade(6)),
        getColor("neutral", getTypeShade(12))
      ],
      StatusBarNoSolution: [
        getColor("purpleMoreChroma", getTypeShade(4)),
        getColor("neutral", getTypeShade(12))
      ]
    },
    "ColorizedSignatureHelp colors": {
      "HTML Attribute Value": [null, getProperty("token.string")],
      punctuation: [null, getProperty("token.punctuation")],
      urlformat: [null, getProperty("token.url")],
      "Preprocessor Keyword": [null, getProperty("token.operator")],
      "MarkerFormatDefinition/HighlightedDefinition": [
        getColor("blueLessChroma", getTypeShade(1)),
        null
      ],
      "MarkerFormatDefinition/HighlightedReference": [
        getColor("blueLessChroma", getTypeShade(1)),
        null
      ],
      "MarkerFormatDefinition/HighlightedWrittenReference": [
        getColor("blueLessChroma", getTypeShade(1)),
        null
      ],
      "MarkerFormatDefinition/FindHighlight": [
        getColor("blueLessChroma", getTypeShade(1)),
        null
      ],
      "Peek Background": [getColor("neutral", getTypeShade(1)), null],
      "Peek Background Unfocused": [getColor("neutral", getTypeShade(2)), null],
      "Block Structure Adornments": [getColor("neutral", getTypeShade(3)), null]
    },
    "Text Editor Text Marker Items": {
      "Current Statement": ["#eff284ff", null], // Revert
      "Brace Matching (Rectangle)": [
        getColor("blueLessChroma", getTypeShade(3)),
        null
      ]
    },
    VisualStudioInstaller: {
      Background: [getColor("neutral", getTypeShade(16)), null]
    }
  };

  return mergeConfigurationCategoriesCustomizations(
    customizations,
    configuration,
    getColor
  );
}

function getSearchReplaceCustomizations(
  configuration,
  getColor,
  getProperty,
  getTypeShade
) {
  const { environment } = configuration;

  const replacements = [
    //
    // Backgrounds
    //

    // Active tab, statusbar
    ["#007accff", getColor("neutral", getTypeShade(3))],

    // Menu bar item hover
    ["#3e3e40ff", getColor("neutral", getTypeShade(2))],

    // Menu
    ["#1b1b1cff", getColor("neutral", getTypeShade(1))],

    // Menu item hover
    ["#333334ff", getColor("neutral", getTypeShade(2))],

    // Hover tab
    ["#1c97eaff", getColor("neutral", getTypeShade(2))],

    // Inactive tab hover close
    ["#52b0efff", getColor("neutral", getTypeShade(3))],

    // Inactive tab active close
    ["#0e6198ff", getColor("neutral", getTypeShade(4))],

    // Editor
    ["#1e1e1eff", getColor("neutral", getTypeShade(0))],

    // Toolbar separator
    ["#222222ff", getColor("neutral", getTypeShade(0))],

    // Solution Explorer, Properties
    ["#252526ff", getColor("neutral", getTypeShade(0))],

    // Title bar, menu bar
    ["#2d2d30ff", getColor("neutral", getTypeShade(1))],

    // Breakpoints bar
    ["#333333ff", getColor("neutral", getTypeShade(1))],

    // Search Solution Explorer, Quick Launch, Package Manager, menu separator line and borders around menu/menu item
    ["#333337ff", getColor("neutral", getTypeShade(0))],

    // Scrollbar containers
    [
      "#3e3e42ff",
      environment.transparentScrollbarContainers
        ? getColor("neutral", getTypeShade(0))
        : getColor("neutral", getTypeShade(1))
    ],

    // Scrollbar
    [
      "#686868ff",
      environment.additionalScrollbarsContrast
        ? getColor("neutral", getTypeShade(3))
        : getColor("neutral", getTypeShade(2))
    ],

    // Scrollbar hover
    [
      "#9e9e9eff",
      environment.additionalScrollbarsContrast
        ? getColor("neutral", getTypeShade(4))
        : getColor("neutral", getTypeShade(3))
    ],

    // Scrollbar active
    [
      "#efebefff",
      environment.additionalScrollbarsContrast
        ? getColor("neutral", getTypeShade(5))
        : getColor("neutral", getTypeShade(4))
    ],

    // Scrollbar glyph disabled
    ["#555558ff", getColor("neutral", getTypeShade(2))],

    // Selected item in Solution Explorer, thin borders across app
    [
      "#3f3f46ff",
      environment.transparentBorders
        ? getColor("neutral", getTypeShade(1))
        : getColor("neutral", getTypeShade(2))
    ],

    // Package Manger border
    ["#434346ff", getColor("neutral", getTypeShade(3))],

    // Current line border
    ["#464646ff", getColor("neutral", getTypeShade(1))],

    // Grip – inactive tool window
    [
      "#46464aff",
      environment.transparentToolWindowGrips
        ? getColor("neutral", getTypeShade(1))
        : getColor("neutral", getTypeShade(3))
    ],

    // Grip – active tool window
    [
      "#59a8deff",
      environment.transparentToolWindowGrips
        ? getColor("neutral", getTypeShade(3))
        : getColor("neutral", getTypeShade(6))
    ],

    // File changes indicator, current debugging statement
    ["#eff284ff", getColor("neutral", getTypeShade(1))],

    // File changes after save indicator
    ["#577430ff", getColor("neutral", getTypeShade(1))],

    // Outline area
    ["#232323ff", getColor("neutral", getTypeShade(1))],

    // File preview
    ["#68217aff", getColor("accent", getTypeShade(0))],

    // Tooltip
    ["#424245ff", getColor("neutral", getTypeShade(1))],

    // Tooltip border
    ["#4d4d50ff", getColor("neutral", getTypeShade(1))],

    // Extensions item hover
    ["#3f3f40ff", getColor("neutral", getTypeShade(1))],

    // Yellowy tooltip line
    ["#fefcc8ff", getColor("orange", getTypeShade(15))],

    // Start page arrow
    ["#4f4f53ff", getColor("accent", getTypeShade(8))],

    // Start page arrow hover
    ["#606060ff", getColor("accent", getTypeShade(9))],

    // Notification badge
    ["#8631c7ff", getColor("accent", getTypeShade(0))],

    // `100%` box arrow hover
    ["#1f1f20ff", getColor("neutral", getTypeShade(6))],

    // Inactive tool window glyph hover
    ["#393939ff", getColor("neutral", getTypeShade(2))],

    // Team Explorer `Changes` label
    ["#2d2d2dff", getColor("neutral", getTypeShade(2))],

    // Team Explorer `Changes` label icon
    ["#3d3d3dff", getColor("neutral", getTypeShade(3))],

    // Team Explorer `Changes` label icon hover
    ["#525252ff", getColor("neutral", getTypeShade(4))],

    // Team Explorer `Changes` icon
    ["#c8c8c8ff", getColor("neutral", getTypeShade(12))],

    // Team Explorer `Settings` blue indicator
    ["#0079ceff", getColor("accent", getTypeShade(11))],

    // Team Explorer `Changes` red indicator
    ["#f05033ff", getColor("accent", getTypeShade(11))],

    // Diagnostic Tools tab hover
    ["#555555ff", getColor("neutral", getTypeShade(2))],

    // Notification flag
    ["#ffcc00ff", getColor("orangeMoreChroma", 13)],

    // Notification flag hover
    ["#ffdf66ff", getColor("orangeMoreChroma", 14)],

    // Notification flag active
    ["#c59e00ff", getColor("orangeMoreChroma", 12)],

    // Debugger data tip hover
    ["#505051ff", getColor("neutral", getTypeShade(2))],

    // Debugger data tip parent
    ["#3d3d3fff", getColor("neutral", getTypeShade(3))],

    // Debugger data tip parent border
    ["#2c2c2fff", getColor("neutral", getTypeShade(3))],

    // Debugger data tip parent outer border
    ["#37373aff", getColor("neutral", getTypeShade(3))],

    //
    // Foregrounds
    //

    // Editor tooltip
    ["#dadadaff", getColor("neutral", getTypeShade(13))],

    // Start page `NEW`
    ["#ff8c00ff", getColor("green", getTypeShade(13))],

    // Preview Selected Items border
    ["#3399ffff", getColor("accent", getTypeShade(11))],

    // `using`, `public class`
    ["#569cd6ff", getProperty("token.keyword")],

    // `form`, `option` (bold)
    ["#008080ff", getProperty("token.tag")],

    // `&nbsp;`
    ["#00a0a0ff", getProperty("token.type")],

    // `Program`, `WebHost`, `Startup`
    ["#4ec9b0ff", getProperty("token.type")],

    // HTML attribute
    ["#9cdcfeff", getProperty("token.attributeName")],

    // Active tool window tab, `Import theme`
    ["#0097fbff", getColor("neutral", getTypeShade(13))],

    // JSON property
    ["#d7ba7dff", getProperty("token.property")],

    // Punctuation, method names
    ["#dcdcdcff", getProperty("token.other")],

    // Status bar, Visual Studio logo, active tab, selected Solution Explorer item
    ["#ffffffff", getColor("neutral", getTypeShade(15))],

    // Close and pin icons on active tab
    ["#d0e6f5ff", getColor("neutral", getTypeShade(13))],

    // `<` and `>`
    ["#808080ff", getProperty("token.punctuation")],

    // Operator and HTML operator
    ["#b4b4b4ff", getProperty("token.operator")],

    // Most UI text (menu bar items, tabs, non-selected tabs, console output, Solution Explorer item …)
    ["#f1f1f1ff", getColor("neutral", getTypeShade(12))],

    // Inactive tabs in tool windows, tool window titles
    ["#d0d0d0ff", getColor("neutral", getTypeShade(12))],

    // `Microsoft Visual Studio`
    ["#999999ff", getColor("neutral", getTypeShade(9))],

    // Disabled menu item
    ["#656565ff", getColor("neutral", getTypeShade(7))],

    // Inactive tabs hover in tool windows
    ["#55aaffff", getColor("neutral", getTypeShade(13))],

    // Comments
    ["#57a64aff", getProperty("token.comment")],

    // XML doc comment
    ["#608b4eff", getProperty("token.comment")],

    // Numbers
    ["#b5cea8ff", getProperty("token.number")],

    // `IWebHostBuilder`
    ["#b8d7a3ff", getProperty("token.otherType")],

    // Less variable
    ["#c563bdff", getProperty("token.otherType")],

    // Strings
    ["#d69d85ff", getProperty("token.string")],

    // Start page heading
    ["#84ceffff", getColor("blueLessChroma", getTypeShade(14))],

    // `Import Theme` hover
    ["#88ccfeff", getColor("neutral", getTypeShade(14))]
  ];

  return mergeConfigurationSearchReplaceCustomizations(
    replacements,
    configuration,
    getColor
  );
}

function mergeConfigurationCategoriesCustomizations(
  existingCustomizations,
  configuration,
  getColor
) {
  let customizations = cloneDeep(existingCustomizations);
  const { __categories: categories } = configuration.customizations;

  for (const categoryKey of Object.keys(categories)) {
    const category = categories[categoryKey];

    if (!customizations[categoryKey]) {
      customizations[categoryKey] = {};
    }

    for (const colorsGroupKey of Object.keys(category)) {
      const colorsGroup = category[colorsGroupKey];

      if (!(Array.isArray(colorsGroup) && colorsGroup.length === 2)) {
        throw new Error(
          `Value of categories customization \`${colorsGroupKey}\` in \`configuration.jsonc\` must be an array with length of 2. The first value is a Dainty color constant for the background color. The second value is a Dainty color constant for the foreground color.`
        );
      }

      const backgroundColor = colorsGroup[0]
        ? getColor(...colorsGroup[0].split("-"))
        : null;
      const foregroundColor = colorsGroup[1]
        ? getColor(...colorsGroup[1].split("-"))
        : null;

      customizations[categoryKey][colorsGroupKey] = [
        backgroundColor,
        foregroundColor
      ];
    }
  }

  return customizations;
}

function mergeConfigurationSearchReplaceCustomizations(
  existingReplacements,
  configuration,
  getColor
) {
  let resultReplacements = cloneDeep(existingReplacements);
  const { __searchReplace: replacements } = configuration.customizations;
  const existingReplacementsKeys = existingReplacements.map(c => c[0]);

  for (const replacement of Object.keys(replacements)) {
    if (existingReplacementsKeys.includes(replacement)) {
      const index = resultReplacements.findIndex(r => r[0] === replacement);

      resultReplacements[index] = [
        replacement,
        getColor(...replacements[replacement].split("-"))
      ];
    } else {
      resultReplacements.push([
        replacement,
        getColor(...replacements[replacement].split("-"))
      ]);
    }
  }

  return resultReplacements;
}

module.exports = {
  getCategoriesCustomizations,
  getSearchReplaceCustomizations
};
