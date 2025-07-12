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
 * @return {string[]}
 */
const binaryTreePaths = (root) => {
  // base case
  if (!root.left && !root.right) {
    return [String(root.val)]
  }

  const result = []

  if (root.left) {
    const leftResult = binaryTreePaths(root.left)
    leftResult.forEach(path => {
      const curr = String(root.val) + "->"
      result.push(curr + path)
    })
  }

  if (root.right) {
    const rightResult = binaryTreePaths(root.right)
    rightResult.forEach(path => {
      const curr = String(root.val) + "->"
      result.push(curr + path)
    })
  }

  return result
};
