/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */
object Solution {
    def isSameTree(p: TreeNode, q: TreeNode): Boolean = {
        // empty trees are identical
        if (p == null && q == null) {
            return true
        }

        // both tree are not empty and have the same root value
        if (p != null && q != null && p.value == q.value) {
            // recursively compare their subtrees
            return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
        }

        return false
    }
}
