const { RGBToBGR } = require("../conversions");

function getFontsAndColorsCustomizations(
  configuration,
  getColor,
  getProperty,
  getTypeShade
) {
  function convert(str) {
    return RGBToBGR(str.substr(0, 7))
      .replace("#", "")
      .toUpperCase();
  }

  return [
    [
      "OUTLINING_SQUARE_FOREGROUND",
      convert(getColor("neutral", getTypeShade(4)))
    ],
    [
      "OUTLINING_VERTICAL_RULE_FOREGROUND",
      convert(getColor("neutral", getTypeShade(4)))
    ],
    ["LINE_NUMBER_FOREGROUND", convert(getColor("neutral", getTypeShade(5)))],
    [
      "BLOCK_STRUCTURE_ADORNMENTS_BACKGROUND",
      convert(getColor("neutral", getTypeShade(2)))
    ],
    [
      "HTML_SERVER_SIDE_SCRIPT_FOREGROUND",
      convert(getProperty("token.operator"))
    ],
    [
      "HTML_SERVER_SIDE_SCRIPT_BACKGROUND",
      convert(getColor("neutral", getTypeShade(2)))
    ],
    ["RAZOR_CODE_BACKGROUND", convert(getColor("neutral", getTypeShade(1)))],
    [
      "SELECTED_TEXT_BACKGROUND",
      convert(getColor("blueLessChroma", getTypeShade(6)))
    ],
    ["EDITOR_FONT_FAMILY", configuration.editor.fontFamily],
    [
      "BRACE_MATCHING_FOREGROUND",
      convert(getColor("blueLessChroma", getTypeShade(14)))
    ],
    [
      "BRACE_MATCHING_BACKGROUND",
      convert(getColor("blueLessChroma", getTypeShade(2)))
    ],
    ["CURRENT_LINE_FOREGROUND", convert(getColor("neutral", getTypeShade(0)))],
    ["CURRENT_LINE_BACKGROUND", convert(getColor("neutral", getTypeShade(2)))],
    ["XML_ATTRIBUTE_VALUE_FOREGROUND", convert(getProperty("token.string"))],
    ["XML_ATTRIBUTE_QUOTES_FOREGROUND", convert(getProperty("token.string"))],
    [
      "TEXT_TOOL_WINDOW_FOREGROUND",
      convert(getColor("neutral", getTypeShade(14)))
    ],
    [
      "TEXT_TOOL_WINDOW_BACKGROUND",
      convert(getColor("neutral", getTypeShade(0)))
    ],
    [
      "CPP_MEMBER_FUNCTION_SEMANTIC_TOKEN_FORMAT",
      convert(getProperty("token.function"))
    ],
    [
      "CPP_FUNCTION_SEMANTIC_TOKEN_FORMAT",
      convert(getProperty("token.function"))
    ],
    [
      "CPP_PARAMETER_SEMANTIC_TOKEN_FORMAT",
      convert(getProperty("token.parameter"))
    ],
    [
      "CPP_LOCAL_VARIABLE_SEMANTIC_TOKEN_FORMAT",
      convert(getProperty("token.variable"))
    ],
    [
      "CPP_GLOBAL_VARIABLE_SEMANTIC_TOKEN_FORMAT",
      convert(getProperty("token.variable"))
    ],
    ["CPP_MACRO_SEMANTIC_TOKEN_FORMAT", convert(getProperty("token.constant"))],
    ["PREPROCESSOR_KEYWORD", convert(getProperty("token.keyword"))],
    [
      "CPP_NAMESPACE_SEMANTIC_TOKEN_FORMAT",
      convert(getProperty("token.namespace"))
    ],
    [
      "CPP_MEMBER_FIELD_SEMANTIC_TOKEN_FORMAT",
      convert(getProperty("token.variableProperty"))
    ],
    [
      "CPP_FUNCTION_TEMPLATE_SEMANTIC_TOKEN_FORMAT",
      convert(getProperty("token.function"))
    ]
  ];
}

module.exports = {
  getFontsAndColorsCustomizations
};
