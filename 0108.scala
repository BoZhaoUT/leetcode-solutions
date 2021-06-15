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
        var newNode = null

        while (nums.length > 0) {
            val middle = nums.length / 2
            val newNode = new TreeNode(nums(middle))
            if (middle != 0) {
                newNode.left = sortedArrayToBST(nums.slice(0, middle))
            }
            if (middle != nums.length - 1) {
                newNode.right = sortedArrayToBST(nums.slice(middle + 1, nums.length - 1))
            }
        }

        return newNode
    }
}
