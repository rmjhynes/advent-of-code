package main

import (
	"fmt"
	"os"
)

func main() {
	input, err := os.ReadFile("input.txt")
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(string(input))
}
