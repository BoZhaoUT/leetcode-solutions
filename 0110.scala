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
        // empty tree is balanced
        if (root == null) {
            return true
        }
        // true iff the diff of left height and right height <= 1
        val leftHeight = getTreeHeight(root.left)
        val isLeftBalanced = isBalanced(root.left)

        val rightHeight = getTreeHeight(root.right)
        val isRightBalanced = isBalanced(root.right)

        val diff = scala.math.abs(leftHeight - rightHeight) <= 1

        return isLeftBalanced && isRightBalanced && diff
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
