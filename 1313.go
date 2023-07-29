package main

import "fmt"

func decompressRLElist(nums []int) []int {
	result := []int{}
	for i := 0; i < len(nums); i += 2 {
		freq := nums[i]
		val := nums[i+1]
		for j := 0; j < freq; j++ {
			result = append(result, val)
		}
	}
	return result
}


func main() {
	fmt.Println(decompressRLElist([]int{1, 2, 3, 4})) // [2, 4, 4, 4]
	fmt.Println(decompressRLElist([]int{1, 1, 2, 3})) // [1, 3, 3]
}
