object Solution {
    def moveZeroes(nums: Array[Int]): Unit = {
        var slow = 0
        // move all non zero integers to the front
        for (fast <- nums.indices) {
            if (nums(fast) != 0) {
                nums(slow) = nums(fast)
                slow += 1
            }
        }

        // fill the rest of array with 0s
        while (slow < nums.length) {
            nums(slow) = 0
            slow += 1
        }
    }
}

// https://leetcode.com/problems/move-zeroes/discuss/1217935/Simple-scala-solution


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
