// Define path to helper functions file
const { read_input } = require("../utils");

function part_1() {
  const data = read_input();
  // const line = "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124";
  console.log(data);
  line = data[0];

  let total_invalid_ids = 0;
  
  // Split the line to get individual product IDs ranges
  let product_id_ranges = line.split(",");
  console.log(product_id_ranges);

  // Iterate over product ID ranges
  for (let r = 0; r < product_id_ranges.length; r++) {
    let range = product_id_ranges[r];
    console.log("Range: ", range);

    // Split the range to get either side of the '-'
    bounds = range.split("-");
    console.log("Bounds: ", bounds);

    // Identify invalid IDs within the range
    let n = ((bounds[1] - bounds[0]) + 1);
    console.log("Numbers in range to check: ", n);

    for (let id = Number(bounds[0]); id <= Number(bounds[1]); id++) {
      console.log("ID: ", id);
      let id_str = id.toString();
      // Check id is even - if it is, split the id and check if first and second half match
      if (id_str.length % 2 === 0) {
        console.log("Number of digits in PID is even so possible for a sequence repeat");
        h1 = id_str.slice(0, id_str.length / 2);
        console.log("h1: ", h1);

        h2 = id_str.slice(id_str.length / 2);
        console.log("h2: ", h2);
        if (h1 === h2) {
          console.log("Digits repeated twice!");
          total_invalid_ids += Number(id);
        }
      }
      console.log("Sum of invalid IDs so far: ", total_invalid_ids);
      console.log ("");
    }
  }
  console.log("Total sum of all invalid IDs: ", total_invalid_ids);
};

part_1();
