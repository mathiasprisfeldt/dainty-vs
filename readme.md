# Dainty for Visual Studio

Dainty is a color theme generator with support for Visual Studio Code. Dainty Light and Dainty Dark are the default presets. They’re balanced and refined color themes, using carefully selected colors within the CIELAB color space.

See https://dainty.site/vs for more information.

## Setup

    git clone https://github.com/alexanderte/dainty-vs.git
    cd dainty-vs
    yarn

## Build

    yarn build

The build script generates `dist/dainty.vstheme` and `dist/dainty.vssettings`.

## Configuration

Dainty can be configured by editing `configuration.json`. The file is generated if it doesn’t exist while running `yarn build`. See [Configuration](https://github.com/alexanderte/dainty-shared/blob/master/configuration.md) for more information.

### Visual Studio-specific customizations

While customization genrally should be done using `customization.tokens`, there is possible to tap into how Dainty customizes Visual Studio by adding to the `"__searchReplace"` and `__categories` objects:

```json
"customizations": {
  "__searchReplace": {
    "#b5cea8": ["purple20", "purple20"]
  },
  "__categories": {
    "ColorizedSignatureHelp colors": {
      "HTML Attribute Value": [[null, "blue0"], [null, "blue32"]]
    }
  }
}
```

Each replacement is a tuple, where the first value represents the dark variation of the theme. The second value represents the light variation. For categories there is an inner tuple representing the background and text color, respectively.

## Server

Run `yarn start` to start Express server. These are the available routes:

| Method | Route                           | Description                                                         |
| ------ | ------------------------------- | ------------------------------------------------------------------- |
| `GET`  | `/`                             | Landing page                                                        |
| `GET`  | `/colors.html`                  | Color scales page                                                   |
| `GET`  | `/coverage.html`                | Coverage page                                                       |
| `GET`  | `/syntax.html`                  | Syntax page                                                         |
| `GET`  | `/dainty-latest.zip`            | Generates the latest version of Dainty with default configuration   |
| `POST` | `/dainty-latest-configured.zip` | Generates the latest version of Dainty with custom configuration[1] |

1. Custom configuration is sent as JSON using the request body, and the format is defined by [`configuration-schema.json`](https://github.com/alexanderte/dainty-vs/blob/master/configuration-schema.json).

## License

Dainty is licensed under the [MIT License](https://github.com/alexanderte/dainty-vs/blob/master/license.md).
