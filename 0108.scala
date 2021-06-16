/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */
object Solution {
    def sortedArrayToBST(nums: Array[Int]): TreeNode = {
        if (nums.length == 0) {
            return null
        }
        
        val middle = nums.length / 2
        val result: TreeNode = new TreeNode(nums(middle))

        result.left = sortedArrayToBST(nums.slice(0, middle))
        result.right = sortedArrayToBST(nums.slice(middle + 1, nums.length))

        return result
    }
}

// avoid using array slicing
object Solution {
    def sortedArrayToBST(nums: Array[Int]): TreeNode = {

        def helper(i: Int, j: Int): TreeNode = {
            if (i > j) {
                return null
            }

            val middle = (i + j) / 2
            val result = new TreeNode(nums(middle))
            result.left = helper(i, middle - 1)
            result.right = helper(middle + 1, j)
            return result
        }

        return helper(0, nums.length - 1)
    }
}
