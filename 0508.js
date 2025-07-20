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
const findFrequentTreeSum = (root) => {
  const frequency = {}

  // helper function that givee sub tree sum

  subTreeSum(root, frequency)
  
  // loop through frequency twice
  // 1st run, find the highest frequency, O(n)
  const highest = Math.max(...Object.values(frequency))
  // 2nd run, find all the keys match the hightest frequency O(n)
  const result = []
  for (const [key, value] of Object.entries(frequency)) {
    if (value === highest) {
      result.push(+key)
    }
  } 

  return result
};

const subTreeSum = (root, frequency) => {
  if (!root) {
    return undefined
  }
  const leftSubTreeSum = subTreeSum(root.left, frequency) || 0

  const rightSubTreeSum = subTreeSum(root.right, frequency) || 0

  const sum = leftSubTreeSum + rightSubTreeSum + root.val
  registerFrequency(frequency, sum)

  return sum
}

const registerFrequency = (frequency, sum) => {
  if (sum === undefined) {
    return
  }
  if (frequency[sum]) {
    frequency[sum] += 1
  } else {
    frequency[sum] = 1
  }
}

import { TreeNode } from './tree.js';

let tree

tree = new TreeNode([5, 2, -3])
console.log(findFrequentTreeSum(tree)) // [2,-3,4]

tree = new TreeNode([5, 2, -5])
console.log(findFrequentTreeSum(tree)) // [2]

tree = new TreeNode([5])
console.log(findFrequentTreeSum(tree)) // [5]

tree = new TreeNode([5, 5])
console.log(findFrequentTreeSum(tree)) // [5, 10]

tree = new TreeNode([5, -5])
console.log(findFrequentTreeSum(tree)) // [-5, 0]

tree = new TreeNode([5, 2, -3, 1])
console.log(findFrequentTreeSum(tree)) // [1, 3, -3, 5]

tree = new TreeNode([5, 2, -3, -3])
console.log(findFrequentTreeSum(tree)) // [-3]

