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
    let curr = [root]
    let next = []
    let more = false
    let result = true
    while (more && result) {
        curr.forEach(node => {
            more = more || !!node
            next.push(node ? node.left : null)
            next.push(node ? node.right : null)
        })
        let i = 0
        let j = curr.length - 1
        while (i < j && result) {
            if (curr[i] && curr[j]) {
                result = curr[i].val === curr[j].val
            } else {
                result = curr[i] === null && curr[j] === null
            }
            i++
            j--
        }
        curr = next
        next = []
    }
    return result
};
