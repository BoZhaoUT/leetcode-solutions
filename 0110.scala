/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */
object Solution {
    def isBalanced(root: TreeNode): Boolean = {
        // empty tree
        if (root == null) {
            return tree
        }
        val leftHeight = getTreeHeight(root.left)
        val rightHeight = getTreeHeight(root.right)

        return scala.math.max(leftHeight - rightHeight) <= 1
    }

    def getTreeHeight(root: TreeNode): Int = {
        if (root == null) {
            return 0
        }

        val leftHeight = getTreeHeight(root.left)
        val rightHeight = getTreeHeight(root.right)

        return scala.math.max(leftHeight, rightHeight) + 1
    }
}
