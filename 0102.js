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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = []
    const nodes = [root]
    let values = []
    while (nodes.length) {
        nodes.forEach(node => {
            values.push(node ? node.val : null)
            nodes.push(node.left)
            nodes.push(node.right)
        })
        result.push(values)
    }
    return result
};
