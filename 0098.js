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
var isValidBST = function(root) {
    let result = false
    if (root.left) {
        result = root.left.val < root.val && isValidBST(root.left)
    }
    if (!result) {
        return false
    }
    if (root.right) {
        result = root.val < root.right.val && isValidBST(root.right)
    }
    return result
};
