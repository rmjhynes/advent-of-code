const { read_input } = require("../utils");

function part_1() {
  const lines = read_input();
  
  let count = 0;
  let matrix = [];

  // Build matrix
  for (let line = 0; line < lines.length; line++) {

    let line_array = [];

    for (let c of lines[line]) line_array.push(c);
    matrix.push(line_array);
  }

  // Find index of the start point
  start_index = matrix[0].indexOf("S");

  // Put first beam in array under 'S'
  matrix[1][start_index] = "|";
  console.log(matrix[1]);
  
  let splitter_count = 0;
  // Iterate over lines
  for (let i = 1; i < matrix.length; i++) {
    console.log("We're on line: ", i);
    // Iterate over characters
    for (let j = 0; j < matrix[i].length; j++) {
      // Continue the beam downwards
      if (matrix[i][j] === "." && matrix[i - 1][j] === "|") {
        matrix[i][j] = "|";
      }
      // Split the beam
      else if (matrix[i][j] === "^" && matrix[i - 1][j] === "|") {
        matrix[i][j - 1] = "|";
        matrix[i][j + 1] = "|";
        splitter_count ++;
      }
    }
  }
  console.log(matrix);
  console.log("Splitter count: ", splitter_count);
}

part_1();
