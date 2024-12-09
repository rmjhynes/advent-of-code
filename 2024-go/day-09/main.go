package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
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
	scanner.Scan()

	line := scanner.Text()
	fmt.Println(line)

	// checksum := 0

	// Add each digit to slice
	disk_map := []string{}
	for _, v := range line {
		disk_map = append(disk_map, string(v))
	}
	fmt.Println(disk_map)

	// individual_block := []int{}
	individual_block := []string{}
	for id, block_value := range disk_map {

		str_block_value, _ := strconv.Atoi(block_value)

		// If the ID is even then add the ID block_value times
		if id%2 == 0 {
			for i := 0; i < str_block_value; i++ {
				// ID value is divided by 2 when appending to slice as the IDs only apply to the
				// block file values (every other digit)
				individual_block = append(individual_block, strconv.Itoa(id/2))
			}
		} else { // If the ID is odd append a '.' block_value times
			for i := 0; i < str_block_value; i++ {
				individual_block = append(individual_block, ".")
			}
		}

	}
	fmt.Println(individual_block)

	// Move file blocks one at a time from the end of disk map to leftmost
	// free space block (.)
	for i, v := range individual_block {
		if v == "." {
			free_space_block := i
			// individual_block - slices.insert(individual_block, i, block)
			fmt.Println("Free space here: ", free_space_block)
		}
	}

	for i := len(individual_block) - 1; i >= 0; i-- {
		if individual_block[i] != "." {
			// individual_block = slices.Replace(individual_block, i, i+1, ".")
			fmt.Println("This to be moved to leftmost free space block: ", individual_block[i])
		}
	}
}
