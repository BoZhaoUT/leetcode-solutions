/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */
object Solution {
    def binaryTreePaths(root: TreeNode): List[String] = {
        // leaf
        if (root.left == null && root.right == null) {
            return List(root.value.toString)
        }
        var result = List[String]()
        if (root.left != null) {
            result = result ++ binaryTreePaths(root.left).map(path => {
                root.value.toString + "->" + path
            })
        }
        if (root.right != null) {
            result = result ++ binaryTreePaths(root.right).map(path => {
                root.value.toString + "->" + path
            })
        }
        return result
    }
}

// https://leetcode.com/problems/binary-tree-paths/discuss/328264/Simple-javascript-solution-with-explanation

