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
        // empty tree
        if (root == null) {
            return 0
        }

        // height of subtrees
        val leftHeight = minDepth(root.left)
        val rightHeight = minDepth(root.right)

        var result = 0

        // empty tree is not a valid minimum path unless both
        // children are empty
        if (leftHeight == 0) {
            result = rightHeight
        } else if (rightHeight == 0) {
            result = leftHeight
        } else {
            result = scala.math.min(leftHeight, rightHeight)
        }

        return result + 1
    }
}

