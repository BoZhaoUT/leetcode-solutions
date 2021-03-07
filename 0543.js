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
 var diameterOfBinaryTree = function(root) {
    let result = 0

    const findUsableLength = node => {
        // calculate usable length
        const leftDiameter = node.left ? findUsableLength(node.left) + 1 : 0
        const rightDiameter = node.right ? findUsableLength(node.right) + 1 : 0
        const usaableDiameter = Math.max(leftDiameter, rightDiameter)

        // calculate unusable length
        const unusableDiameter = leftDiameter + rightDiameter

        result = Math.max(result, unusableDiameter)
        return usaableDiameter
    }

    findUsableLength(root)
    return result
};

// usable length (can be combined with parent's length)
// unusable length (cannot be combined with parent's length, but can be used in returned value)
