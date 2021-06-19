/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */
object Solution {
    def minDepth(root: TreeNode): Int = {
        if (root == null) {
            return 0
        }

        val leftHeight = minDepth(root.left)
        val rightHeight = minDepth(root.right)

        return scala.math.min(leftHeight, rightHeight) + 1
    }
}

