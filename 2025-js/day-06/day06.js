const { read_input } = require("../utils");

function part_1() {
  const lines = read_input();
  
  let total = 0;
  let line_array = [];
  let elements_array = [];

  // Iterate over lines and process them into an array of arrays
  for (let line = 0; line < lines.length; line++) {
    // Extract numbers / symbols without whitespace
    elements_array.push(lines[line].trim().split(/\s+/));
  }

  console.log("elements_array", elements_array);

  // Iterate over horizontal lines
  for (let i = 0; i < elements_array.length; i++) {
    // Identify the operator for the vertical line
    const operator = elements_array[elements_array.length - 1][i];
    let vertical_items = elements_array.map(arr => arr[i]);
    // Remove the operator from the array
    vertical_items.splice(vertical_items.length - 1, 1);
    console.log(vertical_items);
    if (operator === "+") {
      let sum = 0;
      vertical_items.map(Number).map(e => sum += e);
      console.log(sum);
      total += sum;
    } else if (operator === "*") {
        product = vertical_items.reduce((accumulator, current_value) => accumulator * current_value, 1);
        console.log(product);
        total += product;
    }
  }
  console.log("Total: ", total);
}

part_1();
