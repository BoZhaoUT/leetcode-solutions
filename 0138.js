/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) {
        return null
    }
    let curr = head
    // make a copy of the input linked list
    // e.g. head = A -> B -> C -> null become
    // head = A -> A' -> B -> B' -> C -> C' -> null
    while (curr) {
        const newNode = new Node(curr.val, curr.next, curr.random)
        curr.next = newNode
        curr = newNode.next
    }

    let input = head
    let output = head.next
    // copy the random reference from input to output list
    while (output) {
        output.random = input.random ? input.random.next : null
        input = output.next
        output = input && input.next
    }

    // separate input and output list
    const result = head.next // head of copied list
    input = head
    output = head.next
    while (output) {
        input.next = output.next
        output.next = output.next ? output.next.next : null
        input = input.next
        output = output.next
    }
    return result
};
