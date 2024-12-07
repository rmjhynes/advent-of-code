package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	input, err := os.Open("input.txt")
	if err != nil {
		fmt.Println(err)
	}

	defer input.Close()

	// Create a scanner to read the file
	scanner := bufio.NewScanner(input)

	safe_reports := 0

	// Read the file line by line
	for scanner.Scan() {
		// Split the line by whitespace
		reportStrings := strings.Fields(scanner.Text())

		// Convert strings to integers
		reportInts := []int{}
		for _, v := range reportStrings {
			i, _ := strconv.Atoi(v)
			reportInts = append(reportInts, i)

		}

		// # Part 1 --------------------------------------------------------------------------------- #

		// Levels are potentially gradually increasing
		if reportInts[0] < reportInts[len(reportInts)-1] {
			gradual_increase := true
			for i := range len(reportInts) - 1 {
				if (reportInts[i] >= reportInts[i+1]) || (reportInts[i+1]-reportInts[i] > 3) {
					// Stop as levels are not gradually increasing and/or adjacent levels differ by more than 3
					gradual_increase = false
				}
			}
			if gradual_increase {
				safe_reports += 1
			}
		} else if reportInts[0] > reportInts[len(reportInts)-1] { // Levels are potentially gradually decreasing
			gradual_decrease := true
			for i := range len(reportInts) - 1 {
				if (reportInts[i] <= reportInts[i+1]) || (reportInts[i]-reportInts[i+1] > 3) {
					// Stop as levels are not gradually decreasing and/or adjacent levels differ by more than 3
					gradual_decrease = false
				}
			}
			if gradual_decrease {
				safe_reports += 1
			}
		}

		// # Part 2 --------------------------------------------------------------------------------- #
		// Not enough brain capacity for part 2 :(

	}
	fmt.Println("Safe reports: ", safe_reports)
}
