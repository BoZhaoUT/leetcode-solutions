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
