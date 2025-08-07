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
const getMinimumDifference = (root) => {
  let prev = null
  let smallestDifference = Number.POSITIVE_INFINITY

  const inOrderTraversal = (root) => {
    if (!root) {
      return
    }

    inOrderTraversal(root.elft)

    if (prev !== null) {
      smallestDifference = Math.min(smallestDifference, node.val - prev)
    }
    prev = node.val

    inOrderTraversal(root.right)
  }

  inOrderTraversal(root)
  return smallestDifference
};