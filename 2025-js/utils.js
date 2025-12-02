const fs = require("node:fs");
const path = require("node:path");

function read_input(filename = "input.txt") {
  // Resolve the file path relative to the caller’s directory
  const fullPath = path.resolve(process.cwd(), filename);

  const data = fs.readFileSync(fullPath, "utf8");
  return data.trim().split("\n");
}

module.exports = { read_input };
