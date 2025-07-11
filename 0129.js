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
const sumNumbers = (root) => {
  const numbers = helper(root)
  let result = 0
  numbers.forEach(number => {
    result += parseInt(String(root.val) + number)
  })
  return result
};

const helper = (root) => {
  if (!root.left && !root.right) {
    return [String(root.val)]
  }
  const result = []
  if (root.left) {
    const leftNumbers = helper(root.left)
    console.log({leftNumbers})
    leftNumbers.forEach(number => {
      result.push(String(root.val) + number)
    })
  }
  if (root.right) {
    const rightNumbers = helper(root.right)
    console.log({rightNumbers})
    rightNumbers.forEach(number => {
      result.push(String(root.val) + number)
    })
  }

  return result
}


const sumNumbers2 = (root) => {
  const dfs = (node, currentSum) => {
    if (!node) return 0;
    
    const newSum = currentSum * 10 + node.val;
    
    // leaf
    if (!node.left && !node.right) {
      return newSum;
    }

    return dfs(node.left, newSum) + dfs(node.right, newSum);
  };

  return dfs(root, 0);
};