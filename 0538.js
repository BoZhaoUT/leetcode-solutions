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
 * @return {TreeNode}
 */
const convertBST = (root) => {
  let sum = 0

  const helper = (root) => {
    if (!root) {
      return
    }

    helper(root.right)

    root.val += sum
    sum = root.val
    helper(root.left)
  }

  helper(root)
  return root
}

import { TreeNode } from "./tree.js"

console.log(convertBST(new TreeNode([4,1,6,0,2,5,7,null,null,null,3,null,null,null,8])).levelOrder())
console.log(convertBST(new TreeNode([0,null,1])).levelOrder())
