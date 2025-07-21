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
const findBottomLeftValue = (root, depth) => {
  // base case: leaf: a leaf is its bottom left node
    // return its value and depth [value, depth]
  // recursive case: get lett and right sub tree's bottom left value and depth
  const [result] = getBottomLeftValueAndDepth(root, 0) 

  return result
};

const getBottomLeftValueAndDepth = (root, depth) => {
  if (!root) {
    return [0, -1]
  }

  if (!root.left && !root.right) {
    return [root.val, depth]
  }

  const [leftSubTreeValue, leftSubTreeDepth] = getBottomLeftValueAndDepth(root.left, depth + 1)
  const [rightSubTreeValue, rightSubTreeDepth] = getBottomLeftValueAndDepth(root.right, depth + 1)
  if (leftSubTreeDepth >= rightSubTreeDepth) {
    return [leftSubTreeValue, leftSubTreeDepth]
  }
  return [rightSubTreeValue, rightSubTreeDepth]
}

import { TreeNode } from "./tree.js"


console.log(findBottomLeftValue(new TreeNode([2,1,3]))) // 1
console.log(findBottomLeftValue(new TreeNode([1,2,3,4,null,5,6,null,null,7]))) // 7

console.log(findBottomLeftValue(new TreeNode([1]))) // 1
console.log(findBottomLeftValue(new TreeNode([1,2]))) // 2
console.log(findBottomLeftValue(new TreeNode([1,null, 2]))) // 2
