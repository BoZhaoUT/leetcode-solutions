/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
const maxDepth = (root) => {
  if (!root) {
    return 0
  }
  if (root.children === null) {
    return 1
  }
  return root.children.reduce((accu, curr) => {
    const depth = maxDepth(curr)
    return Math.max(accu, depth)
  }, 0) + 1
}
