export class TreeNode {
    constructor(val, left = null, right = null) {
        if (typeof val === "number") { // single node
            this.val = val
            this.left = left
            this.right = right
        } else if (Array.isArray(val)) { // from a list of values
            const root = this.fromList(val)
            this.val = root.val
            this.left = root.left
            this.right = root.right
        } else {
            console.log(`val is not recognized. Its type is ${typeof val}`)
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

    inOrder() {
        if (this.left) {
            this.left.inOrder()
        }
        console.log(this.val)
        if (this.right) {
            this.right.inOrder()
        }
    }

    preOrder() {
        console.log(this.val)
        if (this.left) {
            this.left.preOrder()
        }
        if (this.right) {
            this.right.preOrder()
        }
    }

    postOrder() {
        if (this.left) {
            this.left.postOrder()
        }
        if (this.right) {
            this.right.postOrder()
        }
        console.log(this.val)
    }
}


// import { TreeNode } from './tree.js';

// const tree = new TreeNode([3,9,20,null,null,15,7])
// console.log(tree.levelOrder())
/*
 *                  3
 *              9      20
 *            .   .  15  7
 * 
 */





// const tree = new TreeNode([1,2,3,4,5])
// tree.inOrder() // 4, 2, 5, 1, 3
// tree.preOrder() // 1, 2, 4, 5, 3
// tree.postOrder() // 4, 5, 2, 3 ,1
/*
 *                  1
 *              2      3
 *            4   5
 */