function part_1(input_data) {
  
  // Split into lines (drops the trailing newline)
  const rotations = input_data.trim().split("\n");
  
  // Dial starts by pointing at 50
  let pointer = 50;

  for (let i = 0; i < rotations.length; i++) {
    console.log("");
    console.log("Pointer at: ", pointer);
    
    // Direction is the first character of the rotation
    let direction = rotations[i].charAt(0);
    console.log("Direction: ", direction);

    // Points is the substring after the first character
    let points = Number(rotations[i].substring(1));
    // If > 100, dismiss the first digit as a x00 move will always result in the
    // same point shift to the left or right
    if (points >= 100) {
      points = Number(rotations[i].substring(2));
    }

    console.log("Points: ", points);

    if (direction.trim() === "L"){
      // If pointer moves past 0 anti-clockwise
      if (pointer - points < 0) {
        pointer = 100 - (points - pointer);
      } else {
        pointer -= points;
      }
    } else if (direction.trim() === "R"){
      // If pointer moves past 99 clockwise
      if (pointer + points > 99) {
        let points_to_end;

        if (pointer === 99) {
          points_to_end = 0;
        } else {
          points_to_end = 99 - pointer;
        }
        pointer = (points - points_to_end - 1);
      } else {
        pointer += points;
      }
    }
    check_zero(pointer);
    console.log("Pointer now at: ", pointer);
    console.log("Occurrences of zero so far: ", total);
  }
  console.log("");
  console.log("Total occurrences of zero (password to the door): ", total);
}

function check_zero(pointer) {
  if (pointer === 0) {
    total += 1;
  }
}

function part_2(input_data) {
  
  // Split into lines (drops the trailing newline)
  const rotations = input_data.trim().split("\n");

  // Dial starts by pointing at 50
  let pointer = 50;

  for (let i = 0; i < rotations.length; i++) {
    console.log("");
    console.log("Pointer at: ", pointer);
    console.log(pointer, typeof pointer);
    
    // Direction is the first character of the rotation
    let direction = rotations[i].charAt(0);
    console.log("Direction: ", direction);

    // Points is the substring after the first character
    let points = Number(rotations[i].substring(1));
    // If > 100, dismiss the first digit as a x00 move will always result in the
    // same point shift to the left or right
    if (points >= 100) {
      points = Number(rotations[i].substring(2));
      // Extract the multiple of 100 (first digit we will call x) as this will
      // point at 0 x00 times
      console.log("Add " + Number(rotations[i].substring(1, 2)) + " zeros to the total");
      total += Number(rotations[i].substring(1, 2));
    }

    console.log("Points: ", points);

    if (direction.trim() === "L"){
      // If pointer moves past 0 anti-clockwise
      if (pointer - points < 0) {
        if (pointer !== 0) {
          console.log("dodgy...");
          total += 1;
        }
        pointer = 100 - (points - pointer);
      } else if (pointer - points === 0) {
        // If original points value is a multiple of 100 (points = 0) you don't want to add a 0 to the total here
        if ( points !== 0) {
          total += 1;
        }
        pointer = 0;
      } else {
        pointer -= points;
      }
    } else if (direction.trim() === "R"){
      // If pointer moves past 99 clockwise
      if (pointer + points > 99) {
        let points_to_end;

        if (pointer === 99) {
          points_to_end = 0;
        } else {
          points_to_end = 99 - pointer;
        }
        pointer = (points - points_to_end - 1);
        total += 1;

        // If pointer now points at 0 (100 on a linear scale)
      } else if (pointer + points === 100){
        pointer = 0;
        total += 1;
      } else {
        pointer += points;
      }
    }
    console.log("Pointer now at: ", pointer);
    console.log("Occurrences of dial pointing at zero so far: ", total);
  }
  console.log("");
  console.log("Total occurrences of dial moving past or pointing at zero (password to the door): ", total);
}

const fs = require('node:fs');
const input_data = fs.readFileSync("input.txt", "utf8");
let total = 0;
// part_1(input_data);
part_2(input_data);
