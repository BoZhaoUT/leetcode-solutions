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
        var result = List[String]()
        val path = root.value.toString
        buildPath(root, path, result)
        return result
    }
    
    def buildPath(root: TreeNode, path: String, paths: List[String]): String = {
        if (root.left != null) {
            val newPath += "->" + root.left.value.toString
            return buildPath(root.left, path, paths)
        }
        if (root.right != null) {
            val newPath += "->" + root.right.value.toString
            buildPath(root.right, path, paths)
        }
        if (root.left == null && root.right = null) {
            paths :+ path  
        }
    }
}
