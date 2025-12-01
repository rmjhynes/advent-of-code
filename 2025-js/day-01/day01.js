function part_1() {
  
  const fs = require('node:fs');
  const data = fs.readFileSync("input.txt", "utf8");

  // Split into lines (drops the trailing newline)
  // const rotations = data.trim().split("\n");
  //
  // console.log(rotations);
  //
  // const dial_nums = Array.apply(null, Array(100)).map(function(x, i) { return i; });
  // console.log("Dial numbers: ", dial_nums);

  let pointer = 50;

  // rotations = ["L2", "R7", "L55", "R3", "L15", "R12", "R67", "R40", "L7"]
   rotations = ["L1", "L29", "R31", "L43"]

  for (let i = 0; i < rotations.length; i++) {
    console.log("");
    console.log("Pointer at: ", pointer);
    direction = rotations[i].charAt(0);
    console.log("Direction: ", direction);
    // Points is the substring after the first character
    points = Number(rotations[i].substring(1))
    console.log("Points: ", points);

    if (direction.trim() === "L"){
      if (pointer - points < 0) {
        // Have to account for the extra 1 shift from 0 to 99
        // pointer = 99 - (points - points_to_zero)
        pointer = 100 - (points - pointer)
        check_zero(pointer);
        console.log("Pointer now at: ", pointer)
      } else {
        pointer = pointer - points
        check_zero(pointer);
        console.log("Pointer now at: ", pointer)
      }
    } else if (direction.trim() === "R"){
      if (pointer + points > 99) {
        points_to_end = 99 - pointer
        // points_to_end = 100 - pointer
        pointer = (points - points_to_end - 1)
        check_zero(pointer);
        console.log("Pointer now at: ", pointer)
      } else {
        pointer = pointer + points
        check_zero(pointer);
        console.log("Pointer now at: ", pointer)
      }
    }

  }

  console.log("Total occurrences of zero: ", total);
}

function check_zero(pointer) {
  if (pointer === 0) {
    total += 1
  }
}

let total = 0
part_1();
