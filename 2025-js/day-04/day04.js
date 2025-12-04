const { read_input } = require("../utils");

function build_matrix() {
  const lines = read_input();
  let mat = [];
  
  // Build array of arrays to get a matrix
  // Iterate over each line
  for (let line = 0; line < lines.length; line++) {
    // Push each roll to an array for the current line
    let line_array = [];
    for (let roll of lines[line]) line_array.push(roll);
    // Push the current line array to the lines array to get array of arrays
    mat.push(line_array);
  }
  return mat;
}

function findNextGen(mat) {
  let m = mat.length, n = mat[0].length;

  // Create matrix to store cells of next generation.
  let nextGen = Array.from({length : m}, () => Array(n).fill(0));
  // Directions of eight possible neighbors
  let directions = [
      [ 0, 1 ], [ 1, 0 ], [ 0, -1 ], [ -1, 0 ], [ 1, 1 ],
      [ -1, -1 ], [ 1, -1 ], [ -1, 1 ]
  ];

  // Iterate over the matrix
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let live = 0;

      // Count the number of adjacent rolls
      for (let [dx, dy] of directions) {
        let x = i + dx, y = j + dy;

        // check if the neighbor is a roll
        if (x >= 0 && x < m && y >= 0 && y < n && (mat[x][y] === '@')) {
          live++;
        }
      }

      // If current cell is a roll and number of adjacent rolls is less than 4
      // then the cell will be marked with an 'x'
      if (mat[i][j] === '@' && live < 4) {
          nextGen[i][j] = 'x';
      }

      // Else the state of cells will remain same
      else {
          nextGen[i][j] = mat[i][j];
      }
    }
  }

  for (let i = 0; i < m; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
        row += nextGen[i][j] + " ";
    }
    // Print final matrix in readable layout
    console.log(row.trim());
  }
  return nextGen;
}

function count_accessile_rolls(mat) {
  let roll_count = 0;
  for (let line = 0; line < mat.length; line++) {
    for (i = 0; i < mat[0].length; i++) {
      if (mat[line][i] === 'x') roll_count++; 
    }
  }
  console.log("Roll count: ", roll_count);
}

mat = build_matrix();
final_mat = findNextGen(mat);
count_accessile_rolls(final_mat);
