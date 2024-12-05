package main

import (
	"bufio"
	"fmt"
	"os"
	"regexp"
	"strconv"
	"strings"
)

func part1() {
	input, err := os.Open("input.txt")
	if err != nil {
		fmt.Println(err)
	}

	// Create a scanner to read the file
	scanner := bufio.NewScanner(input)

	total := 0

	// Read the file line by line
	for scanner.Scan() {
		// Extract all strings that match the regex pattern e.g. mul(123,456)
		regex_pattern := regexp.MustCompile(`\Qmul(\E\d{1,3},\d{1,3}[)]`)
		mul_string_slice := regex_pattern.FindAllString(scanner.Text(), -1)

		for _, v := range mul_string_slice {
			// Further extract just the digits between 'mul(' and ')'
			regex_pattern = regexp.MustCompile(`[0-9]{1,3},[0-9]{1,3}`)
			digit_slice := regex_pattern.FindAllString(v, -1)

			// Multiply each pair of extracted digits (int a and int b) and add to total
			for _, v := range digit_slice {
				// Split digits by the comma
				split := strings.Split(v, ",")

				// Convert strings to integers
				int_a, _ := strconv.Atoi(split[0])
				int_b, _ := strconv.Atoi(split[1])
				result := int_a * int_b
				total += result
			}
		}
	}
	fmt.Println("Total: ", total)
}

func part2() {
	enabled_total := 0

	input, err := os.Open("input.txt")
	if err != nil {
		fmt.Println(err)
	}
	// Create a scanner to read the file
	scanner := bufio.NewScanner(input)

	for scanner.Scan() {
		// Extract all strings that match the regex pattern e.g. mul(123,456) including instrcutions do() or don't()
		enabled_regex_pattern := regexp.MustCompile(`\Qmul(\E\d{1,3},\d{1,3}[)]|\Qdon't()\E|\Qdo()\E`)
		instr_mul_string_slice := enabled_regex_pattern.FindAllString(scanner.Text(), -1)

		enabled := true
		enabled_instructions := []string{}
		for _, v := range instr_mul_string_slice {
			if v == "do()" {
				enabled = true
			} else if v == "don't()" {
				enabled = false
			} else if enabled && v != "do()" {
				enabled_instructions = append(enabled_instructions, v)
			}
		}

		for _, v := range enabled_instructions {
			// Further extract just the digits between 'mul(' and ')'
			digit_regex_pattern := regexp.MustCompile(`[0-9]{1,3},[0-9]{1,3}`)
			instr_digit_slice := digit_regex_pattern.FindAllString(v, -1)

			// Multiply each pair of extracted digits (int a and int b) and add to total
			for _, v := range instr_digit_slice {
				// Split digits by the comma
				split := strings.Split(v, ",")

				// Convert strings to integers
				int_a, _ := strconv.Atoi(split[0])
				int_b, _ := strconv.Atoi(split[1])
				result := int_a * int_b
				enabled_total += result
			}
		}
	}
	fmt.Println("Enabled total: ", enabled_total)
}

func main() {
	part1()
	part2()
}
