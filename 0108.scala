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
