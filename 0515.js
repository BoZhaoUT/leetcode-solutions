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
 * @return {number[]}
 */
const largestValues = (root) => {
  if (!root) {
    return []
  }
  const result = []

  // level order traversal 

  let curr = [root]
  let next = [] 

  while (curr.length) {
    let largest = Number.NEGATIVE_INFINITY

    curr.forEach(node => {
      largest = Math.max(largest, node.val)
      if (node.left) {
        next.push(node.left)
      }
      if (node.right) {
        next.push(node.right)
      }
    })

    result.push(largest)

    curr = next
    next = []
  }

  return result
};

import { TreeNode } from "./tree.js"

console.log(largestValues(new TreeNode([1,3,2,5,3,null,9]))) // [1, 3, 9]
console.log(largestValues(new TreeNode([1,2,3]))) // [1, 3]

console.log(largestValues(new TreeNode([1]))) // [1]
console.log(largestValues(new TreeNode([1,1,1,1,1,1,1,1,1]))) // [1, 1, 1, 1]
console.log(largestValues(new TreeNode([1,2,3,4,5,6,7,8,9]))) // [1, 3, 7, 9]
console.log(largestValues(new TreeNode([3,9,2,5,7,8,1,4,10]))) // [3, 9, 8, 19]
