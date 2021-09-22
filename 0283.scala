object Solution {
    def moveZeroes(nums: Array[Int]): Unit = {
        var indexOfZero = findNextIndexOfZero(nums, 0)
        var i = 0
        while (i < nums.length && indexOfZero < nums.length) {
            val num = nums(i)
            // find a non-zero number and it needs to be swapped
            if (num != 0 && indexOfZero < i) {
                nums(i) = nums(indexOfZero)
                nums(indexOfZero) = num
                indexOfZero = findNextIndexOfZero(nums, indexOfZero)
            }
            i += 1
        }
    }

    def findNextIndexOfZero(nums: Array[Int], startingIndex: Int): Int = {
        var i = startingIndex
        while (i < nums.length && nums(i) != 0) {
            i += 1
        }
        return i
    }
}

// val array1 = Array(0, 1, 0, 3, 12)
// Solution.moveZeroes(array1)
// println(array1.mkString(" ")) // 1 3 12 0 0


// val array2 = Array(2)
// Solution.moveZeroes(array2)
// println(array2.mkString(" ")) // 2


// val array3 = Array(0)
// Solution.moveZeroes(array3)
// println(array3.mkString(" ")) // 0

// val array4 = Array(1, 3, 12, 0, 0)
// Solution.moveZeroes(array4)
// println(array4.mkString(" ")) // 1 3 12 0 0
