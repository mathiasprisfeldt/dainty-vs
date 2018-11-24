const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { getConfiguration } = require("dainty-shared").configuration;
const { generateColorPalette } = require("dainty-shared").colors;
const { buildThemeZip } = require("./build");
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/dainty-vs-latest.zip", async (_req, res) => {
  const configuration = await getConfiguration(__dirname);
  const colors = generateColorPalette(configuration);
  res.type("zip").end(await buildThemeZip(configuration, colors), "binary");
});

app.post("/dainty-vs-latest-configured.zip", async (req, res) => {
  const configuration = await getConfiguration(__dirname, null, req.body);

  if (configuration === null) {
    res.status(422).send(`Configuration is not valid.`);
    return;
  }

  const colors = generateColorPalette(configuration);

  res.type("zip").end(await buildThemeZip(configuration, colors), "binary");
});

app.use((err, _req, res, _next) => {
  console.error(err.stack);

  if (err.type === "entity.parse.failed") {
    res.status(400).send("Could not parse JSON.");
  } else {
    res.status(500).send("Something went wrong.");
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}.`));
