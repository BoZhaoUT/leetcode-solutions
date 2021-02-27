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
    // special case: tree is empty
    if (!root) {
        return []
    }
    const result = []
    let curr = [root] // nodes in current level
    let next = [] // nodes in next level
    let values = []
    while (curr.length) {
        curr.forEach(node => {
            values.push(node.val)
            if (node.left) {
                next.push(node.left)
            }
            if (node.right) {
                next.push(node.right)
            }
        })
        if (values.length) {
            result.push(values)
        }
        curr = next
        next = []
        values = []
    }
    return result
};

