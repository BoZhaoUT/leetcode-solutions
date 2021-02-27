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
            if (values[i]) {
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
}

const tree = new TreeNode([3,9,20,null,null,15,7])

console.log(levelOrder(tree))
