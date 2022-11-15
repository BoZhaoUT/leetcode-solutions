/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const countNodes = (root) => {
  if (!root) {
    return 0
  }
  let result = 1
  if (root.left) {
    result += countNodes(root.left)
  }
  if (root.right) {
    result += countNodes(root.right)
  }
  return result
}
