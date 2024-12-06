package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	part1()
}

func part1() {
	input, err := os.ReadFile("input.txt")
	if err != nil {
		fmt.Printf("Error reading file: %v\n", err)
		os.Exit(1)
	}

	// Convert input to string and split lines
	lines := strings.Split(string(input), "\n")

	// Append page numbers to slice
	var rules, page_numbers []string
	for _, line := range lines {
		if strings.Contains(line, "|") || strings.Contains(line, ",") {
			if strings.Contains(line, "|") {
				rules = append(rules, line)
			} else {
				page_numbers = append(page_numbers, line)
			}
		}
	}
	fmt.Println("Rules: ", rules)

	// Split page numbers into lines
	for _, l := range page_numbers {
		page_number_split := strings.Split(l, ",")
		fmt.Println("Page number split: ", page_number_split)
	}
}
