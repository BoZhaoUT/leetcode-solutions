/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */
object Solution {
    def invertTree(root: TreeNode): TreeNode = {
        if (root != null) {
            val temp = root.right
            root.right = invertTree(root.left)
            root.left = invertTree(temp)
        }
        return root
    }
}
