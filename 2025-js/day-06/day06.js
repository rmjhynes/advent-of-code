const { read_input } = require("../utils");

function part_1() {
  const lines = read_input();
  
  let total = 0;
  let elements_array = [];

  // Iterate over lines and process them into an array of arrays
  for (let line = 0; line < lines.length; line++) {
    // Extract numbers / symbols without whitespace
    elements_array.push(lines[line].trim().split(/\s+/));
  }

  // Iterate over horizontal lines
  for (let i = 0; i < elements_array[0].length; i++) {
    // Identify the operator for the vertical line
    const operator = elements_array[elements_array.length - 1][i];

    // Parse vertical elements and add to new array
    let vertical_items = elements_array.map(arr => arr[i]);

    // Remove the operator from the array
    vertical_items.splice(vertical_items.length - 1, 1);

    if (operator === "+") {
      let sum = 0;
      vertical_items.map(Number).map(e => sum += e);
      total += sum;
    } else if (operator === "*") {
      const product = vertical_items.reduce((accumulator, current_value) => accumulator * current_value, 1);
      total += product;
    }
  }
  console.log("Total: ", total);
}

part_1();
