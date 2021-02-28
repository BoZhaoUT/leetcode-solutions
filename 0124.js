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
var maxPathSum = function(root) {
    let result = -Infinity

    const findUsableSum = root => {
        const leftSum = root.left ? findUsableSum(root.left) : -Infinity
        const rightSum = root.right ? findUsableSum(root.right) : -Infinity

        const usableSum = Math.max(leftSum + root.val, rightSum + root.val, root.val)
        const unusableSum = Math.max(leftSum, rightSum, leftSum + root.val + rightSum)
        result = Math.max(result, usableSum, unusableSum)
        return usableSum
    }

    findUsableSum(root)
    return result
};


// the idea of solving this problem is to find the max amoung usable sub tress and un-sable sub trees
// usable sub trees:
// 1. leftSubTree + root
// 2. rightSubTree + root
// 3. root itself

// un-usable sub tress:
// 1. leftSubTree <- disconnected from parent because it doesn't contain sub tree root
// 2. rightSubTree <- same as above
// 3. leftSubTree + root.val + rightSubTree <- traversing to left sub tree and right sub tree from parent are
//                                             mutually exclusive, because sub tree root can only be visited once.
//                                             the only exclusion is the input tree root.

