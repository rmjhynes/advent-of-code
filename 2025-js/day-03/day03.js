// Define path to helper functions file
const { read_input } = require("../utils");

function part_1() {
  const lines = read_input();
  // Split into lines (drops the trailing newline)
  //const lines = input_data.trim().split("\n");

  console.log(lines);

  let total_joltage = 0;

  // Iterate over battery lines (lines)
  for (let line = 0; line < lines.length; line++) {
   
    //console.log(lines[line]);
    // Set largest_digit to first digit
    let fp_largest_digit_value = lines[line][0];
    console.log("First pass largest digit value (index 0): ", fp_largest_digit_value);
    let fp_largest_digit_index = 0;

    let line_array = [];

    // Add each digit to array so we can iterate over them
    for (let digit of lines[line]) line_array.push(digit);

    console.log("Line array: ", line_array);
    
    // Find the highest digit in each line (line) of batteries on first passV
    // Ignore last digit on first pass as this cannot be the first digit of
    // largest poissible voltage
    for (let i = 0; i < (line_array.length - 1); i++) {
      // console.log("Digit of LA: ", line_array[i]);
      // console.log("Index of digit of LA: ", i);
      // 
      // Check if its the largest digit of the first pass
      if (line_array[i] > fp_largest_digit_value) {
        fp_largest_digit_value = line_array[i]
        console.log("FP largest digit value is now: ", fp_largest_digit_value);
        fp_largest_digit_index = i;
        console.log("FP Largest digit index is now: ", fp_largest_digit_index);
      }
    }

    // Largest digit value of the second pass starts at the digit after the
    // the largest digit of the first pass
    sp_largest_digit_index = fp_largest_digit_index + 1;
    console.log("SP Largest digit index: ", sp_largest_digit_index);
    sp_largest_digit_value = line_array[sp_largest_digit_index]
    console.log("SP largest digit value: ", sp_largest_digit_value);

    for (let j = sp_largest_digit_index; j < line_array.length; j++) {
      if (line_array[j] > sp_largest_digit_value) {
        sp_largest_digit_index = line_array[j];
        console.log("SP largest digit index is now: ", j);
        sp_largest_digit_value = line_array[j];
        console.log("SP largest digit value is now: ", sp_largest_digit_value);
      }
    }

    // Concatenate largest digits from first and second pass and add to total
    line_voltage = fp_largest_digit_value.concat(sp_largest_digit_value);
    console.log("Line voltage to add to the toal: ", line_voltage);
    total_joltage += Number(line_voltage);
    console.log("Total joltage so far: ", total_joltage);


    // Find the highest digit in each line (line) of batteries on first passV
    // Ignore last digit on first pass as this cannot be the first digit of
    // largest_digit poissible voltage
    // for (let i = 0; i < (lines[line].length - 1); i++) {
    //   console.log("Digit: ", lines[line][i]);
    //   console.log("Largest digit value: ", largest_digit_value);
    //  
    //   if (lines[line][i] > largest_digit_value) {
    //     largest_digit_value = lines[line][i];
    //     console.log("Largest digit value on first pass is now: ", largest_digit_value);
    //     largest_digit_index = lines[line][i].indexOf(largest_digit_value);
    //     console.log("Largest digit index: ", largest_digit_index);
    //   } else {
    //     largest_digit_index = lines[line][i].indexOf(largest_digit_value);
    //     console.log("Largest digit index: ", largest_digit_index);
    //   }
    // }
    //
   

    // Second pass to find the highest after the first digit
  //   for (let j = (largest_digit_index + 1); j < lines[line].length; j++) {
  //
  //     if (lines[line][j] > largest_digit_value) {
  //       largest_digit_value = lines[line][j];
  //       console.log("Largest digit value on second pass: ", largest_digit_value);
  //     }
  //
  //   }
  }
  console.log("Total joltage: ", total_joltage);
}

part_1();
