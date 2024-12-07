package main

import (
	"bufio"
	"fmt"
	"os"
	"slices"
	"strings"
)

func main() {
	part1()
}

func part1() {
	input, err := os.Open("input.txt")
	if err != nil {
		fmt.Println(err)
	}

	defer input.Close()

	// Create a scanner to read the file
	scanner := bufio.NewScanner(input)

	// Create a 2D slice to store each line of positions in a slice
	matrix := [][]string{}

	// Read the file line by line and split the positions into a slice
	for scanner.Scan() {
		letter_split := strings.Split(scanner.Text(), "")

		// Append the split positions to a slice in the matrix to represent a row
		matrix = append(matrix, letter_split)
	}

	// Guard starts facing upwards
	guard_direction := "u"
	inside_map := true

	// Initialise variables for the guard's x and y position on the map
	var guard_pos_x, guard_pos_y int

	// Find starting position of the guard on the map
	for li, l := range matrix {
		for ci := range l {
			if matrix[li][ci] == "^" {
				guard_pos_x = ci
				guard_pos_y = li
				fmt.Println("Starting position of the guard (x,y): ", guard_pos_x, guard_pos_y)
			}
		}
	}

	// Whilst the guard is still inside the map, move the guard's position
	for inside_map {
		if guard_direction == "u" && guard_pos_y == 0 { // Guard is about to leave the map boundary

			// Replace the previous position with an 'X' to track guards path
			matrix[guard_pos_y] = slices.Replace(matrix[guard_pos_y], guard_pos_x, guard_pos_x+1, "X")

			// Guard has left the map so break out of the loop
			inside_map = false

		} else if guard_direction == "u" && matrix[guard_pos_y-1][guard_pos_x] != "#" { // If no obstructions one place up, move guard up

			// Move guards position up one
			matrix[guard_pos_y-1] = slices.Replace((matrix[guard_pos_y-1]), guard_pos_x, guard_pos_x+1, "^")

			// Replace the previous position with an 'X' to track guards path
			matrix[guard_pos_y] = slices.Replace(matrix[guard_pos_y], guard_pos_x, guard_pos_x+1, "X")

			// Update guards position
			guard_pos_y -= 1

		} else if guard_direction == "u" && matrix[guard_pos_y-1][guard_pos_x] == "#" { // If obstruction one place up rotate guard to face right
			guard_direction = "r"
		} else if guard_direction == "r" && guard_pos_x == len(matrix[0])-1 { // Guard is about to leave the map boundary

			// Replace the previous position with an 'X' to track guards path
			matrix[guard_pos_y] = slices.Replace(matrix[guard_pos_y], guard_pos_x, guard_pos_x+1, "X")

			// Guard has left the map so break out of the loop
			inside_map = false

		} else if guard_direction == "r" && matrix[guard_pos_y][guard_pos_x+1] != "#" { // If no obstructions one place right, move right

			// Move guards position right one
			matrix[guard_pos_y] = slices.Replace((matrix[guard_pos_y]), guard_pos_x+1, guard_pos_x+2, ">")

			// Replace the previous position with an 'X' to track guards path
			matrix[guard_pos_y] = slices.Replace(matrix[guard_pos_y], guard_pos_x, guard_pos_x+1, "X")

			// Update guards position
			guard_pos_x += 1

		} else if guard_direction == "r" && matrix[guard_pos_y][guard_pos_x+1] == "#" { // If obstuction one place right rotate guard to face down
			guard_direction = "d"
		} else if guard_direction == "d" && guard_pos_y == len(matrix) { // Guard is about to leave the map boundary

			// Replace the previous position with an 'X' to track guards path
			matrix[guard_pos_y] = slices.Replace(matrix[guard_pos_y], guard_pos_x, guard_pos_x+1, "X")

			// Guard has left the map so break out of the loop
			inside_map = false

		} else if guard_direction == "d" && matrix[guard_pos_y+1][guard_pos_x] != "#" { // If no obstructions one place down, move down

			// Move guards position down one
			matrix[guard_pos_y+1] = slices.Replace((matrix[guard_pos_y+1]), guard_pos_x, guard_pos_x+1, "v")

			// Replace the previous position with an 'X' to track guards path
			matrix[guard_pos_y] = slices.Replace(matrix[guard_pos_y], guard_pos_x, guard_pos_x+1, "X")

			// Update guards position
			guard_pos_y += 1

		} else if guard_direction == "d" && matrix[guard_pos_y+1][guard_pos_x] == "#" { // If obstruction one place down rotate guard to face left
			guard_direction = "l"
		} else if guard_direction == "l" && guard_pos_x == 0 { // Guard is about to leave the map boundary

			// Replace the previous position with an 'X' to track guards path
			matrix[guard_pos_y] = slices.Replace(matrix[guard_pos_y], guard_pos_x, guard_pos_x+1, "X")

			// Guard has left the map so break out of the loop
			inside_map = false

		} else if guard_direction == "l" && matrix[guard_pos_y][guard_pos_x-1] != "#" { // If no obstructions one place left, move left

			// Move guards position left one
			matrix[guard_pos_y] = slices.Replace((matrix[guard_pos_y]), guard_pos_x-1, guard_pos_x, "<")

			// Replace the previous position with an 'X' to track guards path
			matrix[guard_pos_y] = slices.Replace(matrix[guard_pos_y], guard_pos_x, guard_pos_x+1, "X")

			// Update guards position
			guard_pos_x -= 1

		} else if guard_direction == "l" && matrix[guard_pos_y][guard_pos_x-1] == "#" { // If obstruction one place left rotate guard to face up
			guard_direction = "u"
		}
	}

	// Count the 'X' characters to get the distinct positions in the guard's path on the map
	distinct_positions := 0
	for _, l := range matrix {
		fmt.Println(l)
		for _, c := range l {
			if c == "X" {
				distinct_positions += 1
			}
		}
	}

	fmt.Println("Final position of the guard before exiting map (x, y): ", guard_pos_x, guard_pos_y)
	fmt.Println("Distince positions in the guard's path: ", distinct_positions)
}
