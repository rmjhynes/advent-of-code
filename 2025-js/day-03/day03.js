const { read_input } = require("../utils");

// Brute force method
function part_1a() {
  const lines = read_input();

  let total_joltage = 0;

  // Iterate over battery lines
  for (let line = 0; line < lines.length; line++) {
   
    // Add each digit to array so we can iterate over them
    let line_array = [];
    for (let digit of lines[line]) line_array.push(digit);
    console.log("Line array: ", line_array);

    // Set largest_digit to first digit
    let fp_largest_digit_value = lines[line][0];
    console.log("FP largest digit value (index 0): ", fp_largest_digit_value);
    let fp_largest_digit_index = 0;

    // Find the highest digit in each line (line) of batteries on first pass
    // Ignore last digit on first pass as this cannot be the first digit of
    // largest poissible voltage
    for (let i = 0; i < (line_array.length - 1); i++) {
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
      // Check if its the largest digit of the second pass
      if (line_array[j] > sp_largest_digit_value) {
        sp_largest_digit_index = line_array[j];
        console.log("SP largest digit index is now: ", j);
        sp_largest_digit_value = line_array[j];
        console.log("SP largest digit value is now: ", sp_largest_digit_value);
      }
    }

    // Concatenate largest digits from first and second pass and add to total
    let line_voltage = fp_largest_digit_value.concat(sp_largest_digit_value);
    console.log("Line voltage to add to the total: ", line_voltage);
    total_joltage += Number(line_voltage);
    console.log("Total joltage so far: ", total_joltage);
  }
  console.log("Total joltage: ", total_joltage);
}

// Thought of a more efficient way to solve it so did part 1 again
function part_1b() {
  const lines = read_input();

  let total_joltage = 0;

  // Iterate over battery lines
  for (let line = 0; line < lines.length; line++) {
   
    // Add each digit to array so we can iterate over them
    let fp_line_array = [];
    let sp_line_array = [];
    for (let digit of lines[line]) fp_line_array.push(digit) && sp_line_array.push(digit);

    // Ignore last digit for first pass as this can nenver be the largest first digit
    fp_line_array.splice(-1, 1);

    // Find highest digit in first pass array
    let fp_largest_digit_index = fp_line_array.reduce((maxIndex, elem, i, fp_line_array) => elem > fp_line_array[maxIndex] ? i : maxIndex, 0);
   
    // Remove digits up to and including the highest from the first pass
    // We will focus on these digits after this in the second pass
    sp_line_array.splice(0, (fp_largest_digit_index + 1));

    // Find highest digit in second pass array
    let sp_largest_digit_index = sp_line_array.reduce((maxIndex, elem, i, sp_line_array) => elem > sp_line_array[maxIndex] ? i : maxIndex, 0);

    // Concatenate largest digits from first and second pass and add to total
    let line_voltage = fp_line_array[fp_largest_digit_index].concat(sp_line_array[sp_largest_digit_index]);
    total_joltage += Number(line_voltage);
  }
  console.log("Total joltage: ", total_joltage);
}

part_1a();
part_1b();
