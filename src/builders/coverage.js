const path = require("path");
const { transformCoveragePage } = require("../transformers/coverage");
const { writeFileLog } = require("dainty-shared/src/utils");

async function buildCoveragePage(dirname, configuration) {
  const target = path.join(dirname, "../dist/coverage.html");
  const data = await transformCoveragePage(configuration);
  writeFileLog(target, data);
}

module.exports = {
  buildCoveragePage
};
