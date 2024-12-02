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

		// Convert column strings to int and append to right and left slices
		i, _ := strconv.Atoi(columns[0])
		left_slice = append(left_slice, i)

		i, _ = strconv.Atoi(columns[1])
		right_slice = append(right_slice, i)
	}

	// Sort each slice from smallest int to largest int
	slices.Sort(left_slice)
	slices.Sort(right_slice)

	// Find the distances between numbers in each slice at each index
	distances := []int{}

	for i := range left_slice {
		if left_slice[i] >= right_slice[i] {
			distances = append(distances, (left_slice[i] - right_slice[i]))
		} else {
			distances = append(distances, (right_slice[i] - left_slice[i]))
		}
	}

	// Find total distance by getting the sum of values in distances slice
	total_distance := 0
	for _, v := range distances {
		total_distance += v
	}

	fmt.Println(total_distance)
}
