const { read_input } = require("../utils");

function part_1() {
  const lines = read_input();
  
  let count = 0;
  let line_array = [];

  // Iterate over lines
  for (let line = 0; line < lines.length; line++) {
    // Add each digit to array so we can iterate over them
    line_array.push(lines[line]);
  }

  // Find empty line in array that seperates ingredient rnages and IDs
  blank_line_index = line_array.indexOf("");
  
  // Extract ingredient ranges and ingredient IDs into seperate arrays
  let ranges = line_array.splice(0, blank_line_index);
  console.log("Ranges: ", ranges);
  let ing_ids = line_array.splice(1, line_array.length);
  console.log("Ingredient ids: ", ing_ids);
 
  // Iterate over ingredient IDs and check if they fall in any of the ranges
  for (let i = 0; i < ing_ids.length; i++) {
    let id = Number(ing_ids[i]);
    for (let j = 0; j < ranges.length; j++) {
      let dash_index = ranges[j].indexOf("-");

      let lb = Number(ranges[j].substring(0, dash_index));
      let ub = Number(ranges[j].substring(dash_index + 1));
      
      // Iterate over the extracted range
      if (id >= lb && id <= ub) {
        count++;
        break;
      }
    }
  }
  console.log("Total fresh ingredient IDs: ", count);
}

part_1();
