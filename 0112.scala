/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */
object Solution {
    def hasPathSum(root: TreeNode, targetSum: Int): Boolean = {
        // empty tree
        if (root == null) {
            return targetSum == 0
        }
        // is leaf
        if (root.left == null && root.right == null) {
            return targetSum == 0
        }
        val remainingSum = targetSum - root.value
        return hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum)
    }
}
