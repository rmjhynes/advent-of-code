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

function part_2(){
  const lines = read_input();
  
  let total = 0;
  let elements_array = [];

  // Iterate over lines and process them into an array of arrays
  for (let line = 0; line < lines.length; line++) {
    // Extract numbers / symbols without whitespace
    elements_array.push(lines[line].trim().split(/\s+/));
  }

  console.log("elements_array: ", elements_array);

  // Iterate over horizontal lines
  for (let i = 0; i < elements_array.length; i++) {
    // Identify the operator for the vertical line
    const operator = elements_array[elements_array.length - 1][i];

    // Parse vertical elements and add to new array
    let vertical_items = elements_array.map(arr => arr[i]);

    // Remove the operator from the array
    vertical_items.splice(vertical_items.length - 1, 1);

    console.log("vertical_items: ", vertical_items);
    
    // Calculate max column length
    // this can be one line i think
    let max_column_size = Math.max(...vertical_items.map(Number));
    console.log("max_column_size: ", max_column_size);
    let max_column_length = max_column_size.toString().length;
    console.log("max_column_length: ", max_column_length);

    let problem_total = 0;
    let column_number = "";

    // Iterate over problems
    for (let i = 0; i < vertical_items.length; i++) {
      // Concatenate column elements into one string
      console.log(vertical_items[i].charAt(0));
      column_number += vertical_items[i].charAt(0);
    }
    console.log("column_number: ", column_number);
    problem_total += Number(column_number);
    console.log("problem_total: ", problem_total);
  }
}

part_1();
part_2();
