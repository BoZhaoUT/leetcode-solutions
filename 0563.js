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
const findTilt = (root) => {
  const [_, tiltSum] = helper(root)
  return tiltSum
}

/**
 * @param {*} root 
 * @returns [treeSum, tiltSum]
 */
const helper = (root) => {
  // empty
  if (!root) {
    return [0, 0]
  }
  // leaf
  if (!root.left && !root.right) {
    return [root.val, 0]
  }

  const [leftSum, leftTilt] = helper(root.left)
  const [rightSum, rightTilt] = helper(root.right)

  const rootTilt = Math.abs(leftSum - rightSum)
  const tiltSum = leftTilt + rightTilt + rootTilt
  const rootSum = leftSum + rightSum + root.val

  return [rootSum, tiltSum]
}

// if leaf, tilt = 0
// if either child is missing, tilt = sum(the other child)
// 

// import { TreeNode } from "./tree.js"

// console.log(findTilt(new TreeNode([1, 2, 3]))) // 1
