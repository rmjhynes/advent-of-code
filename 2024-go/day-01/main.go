package main

import (
	"bufio"
	"fmt"
	"os"
	"slices"
	"strconv"
	"strings"
)

func main() {
	input, err := os.Open("input.txt")
	if err != nil {
		fmt.Println(err)
	}

	// Create a scanner to read the file
	scanner := bufio.NewScanner(input)

	left_slice := []int{}
	right_slice := []int{}

	// Read the file line by line
	for scanner.Scan() {
		// Split the line into columns
		columns := strings.Fields(scanner.Text())

		// Convert column string to int and append to right and left slices
		i, _ := strconv.Atoi(columns[0])
		left_slice = append(left_slice, i)

		i, _ = strconv.Atoi(columns[1])
		right_slice = append(right_slice, i)
	}

	// Sort each slice from smallest int to largest int
	slices.Sort(left_slice)
	fmt.Println(left_slice)

	slices.Sort(right_slice)
	fmt.Println(right_slice)
}
