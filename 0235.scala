/**
 * Definition for a binary tree node.
 * class TreeNode(var _value: Int) {
 *   var value: Int = _value
 *   var left: TreeNode = null
 *   var right: TreeNode = null
 * }
 */
import scala.annotation.tailrec

object Solution {
    @tailrec
    def lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode = {
        // p and q are in the left sub tree
        if (p.value < root.value && q.value < root.value) {
            return lowestCommonAncestor(root.left, p, q)
        } else if (root.value < p.value && root.value < q.value) {
            // p and q are in the right sub tree
            return lowestCommonAncestor(root.right, p, q)
        } else {
            // case 1: p or q is the root
            // case 2: p and q are not in the same sub tree
            return root
        }
    }
}
