package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	part1()
	part2()
}

func part1() {
	input, err := os.Open("input.txt")
	if err != nil {
		fmt.Println(err)
	}

	// Create a scanner to read the file
	scanner := bufio.NewScanner(input)

	count := 0

	// Create a 2D slice to store each line of letters in a slice
	matrix := [][]string{}

	// Read the file line by line and split the characters into a slice
	for scanner.Scan() {
		letter_split := strings.Split(scanner.Text(), "")

		// Append the split letters to a slice in the matrix to represent a row
		matrix = append(matrix, letter_split)
	}

	// Calculate the width and height of the matrix
	index_length_x := len(matrix[0])
	index_length_y := len(matrix)

	// Find the 'X' character in each line
	// In each direction, if 'X' >= 3 places away from the edge of the matrix try to find 'M', 'A' & 'S' in the linear plane
	for line_index, l := range matrix {
		// Iterate through each character in the line to find each 'X' character
		for char_index, c := range l {
			// Find 'XMAS' in the upwards plane
			if c == "X" && line_index >= 3 && matrix[line_index-1][char_index] == "M" && matrix[line_index-2][char_index] == "A" && matrix[line_index-3][char_index] == "S" {
				count += 1
			}
			// Find 'XMAS' in the downwards plane
			if c == "X" && line_index <= (index_length_y-4) && matrix[line_index+1][char_index] == "M" && matrix[line_index+2][char_index] == "A" && matrix[line_index+3][char_index] == "S" {
				count += 1
			}
			// Find 'XMAS' in the right plane
			if c == "X" && char_index <= (index_length_x-4) && matrix[line_index][char_index+1] == "M" && matrix[line_index][char_index+2] == "A" && matrix[line_index][char_index+3] == "S" {
				count += 1
			}
			// Find 'XMAS' in the left plane
			if c == "X" && char_index >= 3 && matrix[line_index][char_index-1] == "M" && matrix[line_index][char_index-2] == "A" && matrix[line_index][char_index-3] == "S" {
				count += 1
			}
			// Find 'XMAS' in the upwards right plane
			if c == "X" && line_index >= 3 && char_index <= (index_length_x-4) && matrix[line_index-1][char_index+1] == "M" && matrix[line_index-2][char_index+2] == "A" && matrix[line_index-3][char_index+3] == "S" {
				count += 1
			}
			// Find 'XMAS' in the downwards right plane
			if c == "X" && line_index <= (index_length_y-4) && char_index <= (index_length_x-4) && matrix[line_index+1][char_index+1] == "M" && matrix[line_index+2][char_index+2] == "A" && matrix[line_index+3][char_index+3] == "S" {
				count += 1
			}
			// Find 'XMAS' in the upwards left plane
			if c == "X" && line_index >= 3 && char_index >= 3 && matrix[line_index-1][char_index-1] == "M" && matrix[line_index-2][char_index-2] == "A" && matrix[line_index-3][char_index-3] == "S" {
				count += 1
			}
			// Find 'XMAS' in the downwards left plane
			if c == "X" && line_index <= (index_length_y-4) && char_index >= 3 && matrix[line_index+1][char_index-1] == "M" && matrix[line_index+2][char_index-2] == "A" && matrix[line_index+3][char_index-3] == "S" {
				count += 1
			}
		}
	}
	fmt.Println("XMAS count: ", count)
}

func part2() {
	input, err := os.Open("input.txt")
	if err != nil {
		fmt.Println(err)
	}

	// Create a scanner to read the file
	scanner := bufio.NewScanner(input)

	count := 0

	// Create a 2D slice to store each line of letters in a slice
	matrix := [][]string{}

	// Read the file line by line and split the characters into a slice
	for scanner.Scan() {
		letter_split := strings.Split(scanner.Text(), "")

		// Append the split letters to a slice in the matrix to represent a row
		matrix = append(matrix, letter_split)
	}

	// Calculate the width and height of the matrix
	index_length_x := len(matrix[0])
	index_length_y := len(matrix)

	// Iterate through each line of the matrix
	for line_index, l := range matrix {
		// Iterate through each character in the line to find each 'A' character
		for char_index, c := range l {
			// If the character 'A' is at least 1 character within the matrix boundaries then check for 2 'MAS' in the shape of an X
			if c == "A" && line_index >= 1 && line_index <= (index_length_y-2) && char_index >= 1 && char_index <= (index_length_x-2) {
				// Find 'MAS' in the upwards right and downwards right planes
				if matrix[line_index-1][char_index+1] == "S" && matrix[line_index+1][char_index+1] == "S" && matrix[line_index+1][char_index-1] == "M" && matrix[line_index-1][char_index-1] == "M" {
					count += 1
				}
				// Find 'MAS' in the upwards left plane and upwards right planes
				if matrix[line_index-1][char_index-1] == "S" && matrix[line_index-1][char_index+1] == "S" && matrix[line_index+1][char_index+1] == "M" && matrix[line_index+1][char_index-1] == "M" {
					count += 1
				}
				// Find 'MAS' in the downwards right plane and downwards left planes
				if matrix[line_index-1][char_index-1] == "M" && matrix[line_index-1][char_index+1] == "M" && matrix[line_index+1][char_index+1] == "S" && matrix[line_index+1][char_index-1] == "S" {
					count += 1
				}
				// Find 'MAS' in the downwards left plane and upwards left planes
				if matrix[line_index-1][char_index+1] == "M" && matrix[line_index+1][char_index+1] == "M" && matrix[line_index+1][char_index-1] == "S" && matrix[line_index-1][char_index-1] == "S" {
					count += 1
				}
			}
		}
	}
	fmt.Println("X-MAS count: ", count)
}
