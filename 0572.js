/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
 var isSubtree = function(s, t) {
    // empty tree is a subtree of anytree
    if (!t) {
        return true
    }
    // empty tree cannot contain a non-empty tree
    if (!s) {
        return false
    }
    if (isSameTree(s, t)) {
        return true
    }
    return isSubtree(s.left, t) || isSubtree(s.right, t)
};

const isSameTree = (s, t) => {
    // two empty trees are the same
    if (!s && !t) {
        return true
    }
    // only 1 tree is empty
    if ((s && !t) || (!s && t)) {
        return false
    }
    // both trees are not empty
    if (s.val !== t.val) {
        return false
    }
    return isSameTree(s.left, t.left) && isSameTree(s.right, t.right)
}
