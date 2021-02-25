class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

const seven = new TreeNode(7)
const three = new TreeNode(3)
const four = new TreeNode(4)
const six = new TreeNode(6, three, seven)
const tree = new TreeNode(5, four, six)

// const one = new TreeNode(1)
// const three = new TreeNode(3)
// const tree = new TreeNode(2, one, three)

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
var isValidBST = function(root, min=-Infinity, max=Infinity) {
    let result = true
    if (root.left) {
        const newMax = Math.min(max, root.val)
        result = root.left.val > min && root.left.val < newMax && isValidBST(root.left, min, newMax)
    }
    if (!result) {
        return false
    }
    if (root.right) {
        const newMin = Math.max(min, root.val)
        result = root.right.val < max && root.right.val > newMin && isValidBST(root.right, newMin, max)
    }
    return result
};

console.log(isValidBST(tree))
