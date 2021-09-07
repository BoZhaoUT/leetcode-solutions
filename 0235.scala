/**
 * Definition for a binary tree node.
 * class TreeNode(var _value: Int) {
 *   var value: Int = _value
 *   var left: TreeNode = null
 *   var right: TreeNode = null
 * }
 */

object Solution {
    def lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode = {
        return findLowestCommonAncestor(root, p, q)
    }

    def findLowestCommonAncestor(root: TreeNode, p: TreeNode | Unit, q: TreeNode | Unit) = {
        val newP = if (p == root) Unit else p
        val newQ = if (q == root) Unit else q
        if (newP == Unit && newQ == Unit) {
            return root
        }
        return findLowestCommonAncestor(root.left, newP, newQ) || findLowestCommonAncestor(root.right, newP, newQ)
    }
}