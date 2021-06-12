/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */
object Solution {
    def maxDepth(root: TreeNode): Int = {
        if (root == null) {
            return 0
        }

        val leftTreeDepth = maxDepth(root.left)
        val rightTreeDepth = maxDepth(root.right)
        
        val depth = scala.math.max(leftTreeDepth, rightTreeDepth) + 1

        return depth
    }
}
