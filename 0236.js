/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    let result
    const findNodes = node => {
        // check left child
        const [leftHasP, leftHasQ] = node.left ? findNodes(node.left) : [false, false]
        if (!result && leftHasP && leftHasQ) {
            result = node
        }
        // check right child
        const [rightHasP, rightHasQ] = node.right ? findNodes(node.right) : [false, false]
        if (!result && rightHasP && rightHasQ) {
            result = node
        }

        const hasP = leftHasP || rightHasP || node.val === p.val
        const hasQ = leftHasQ || rightHasQ || node.val === q.val

        if (!result && hasP && hasQ) {
            result = node
        }
        return [hasP, hasQ]
    }
    findNodes(root)
    return result
};
