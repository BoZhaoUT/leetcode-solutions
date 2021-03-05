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
 var lowestCommonAncestor = function(root, p, q, foundP=false, foundQ=false) {
    if (root.val === p.val) {
        foundP = true
    } else if (root.val === q.val) {
        foundQ = true
    }
    if (foundP && foundQ) {
        return root
    }
    if (root.left && lowestCommonAncestor(root.left, p, q)) {
        return root.left
    }
    if (root.right && lowestCommonAncestor(root.right, p, q)) {
        return root.right
    }
};