/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    // empty tree
    if (!root) {
        return []
    }
    const nodes = []
    let currLevel = [root]
    let nextLevel = []
    let hasNextLevel = true
    while (currLevel.length && hasNextLevel) {
        hasNextLevel = false
        currLevel.forEach(curr => {
            if (curr) {
                nodes.push(curr.val)
                nextLevel.push(curr.left)
                nextLevel.push(curr.right)
                hasNextLevel = true
            } else {
                nodes.push(null)
                nextLevel.push(null)
                nextLevel.push(null)
            }
        })
        currLevel = nextLevel
        nextLevel = []
    }
    return JSON.stringify(nodes)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const nodes = JSON.parse(data)
    if (nodes.length === 0) {
        return null
    }
    const root = nodes[0]
    let curr = root
    while (curr)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


class TreeNode {
    constructor(val, left = null, right = null) {
        if (typeof val === "number") { // single node
            this.val = val
            this.left = left
            this.right = right
        } else { // from a list of values
            const root = this.fromList(val)
            this.val = root.val
            this.left = root.left
            this.right = root.right
        }
    }

    fromList(values) {
        let i = values.length - 1
        let nodes = new Array(values.length).fill(null)
        while (i >= 0) {
            if (values[i] !== null) {
                const leftChild = nodes[2 * i + 1] || null
                const rightChild = nodes[2 * i + 2] || null
                const newNode = new TreeNode(values[i], leftChild, rightChild)
                nodes[i] = newNode
            } else {
                nodes[i] = null
            }
            i--
        }
        return nodes[0]
    }

    levelOrder() {
        const result = []
        let curr = [this] // nodes in current level
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
    }
}


const tree = new TreeNode([3,9,20,null,null,15,7])

console.log(tree.levelOrder())

const serialized = serialize(tree)
console.log(serialized)

console.log(deserialize(serialized))