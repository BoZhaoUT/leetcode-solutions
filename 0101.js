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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return checkTwo(root.left, root.right)
};


const checkTwo = (left, right) => {
    if (left && right) {
        return left.val === right.val && checkTwo(left.left, right.right) && checkTwo(left.right, right.left)
    }
    return left === null && right === null
}
