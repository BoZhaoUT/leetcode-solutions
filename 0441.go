package main

import "fmt"

func arrangeCoins(n int) int {
	result := 0
  for n - result > 0 {
		result += 1
		n -= result
	}
	return result
}

func main() {
	fmt.Println(arrangeCoins(5)) // 2
	fmt.Println(arrangeCoins(8)) // 3
	fmt.Println(arrangeCoins(1)) // 1
	fmt.Println(arrangeCoins(2)) // 2
}