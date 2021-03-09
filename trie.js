class Trie {
    constructor() {
        this.children = {}
        this.isWord = false // store word instead
    }

    addWord(word) {
        let curr = this
        for (let char of word) {
            // char has been added in the past
            if (curr.children[char]) {
                curr = curr.children[char]
            } else { // first time adding a new char
                curr.children[char] = new Trie()
                curr = curr.children[char]
            }
        }
        curr.isWord = true
    }

    hasWord(word) {
        let curr = this
        let i = 0
        while (curr && i < word.length) {
            const char = word[i]
            curr = curr.children[char]
            i++
        }
        return curr ? curr.isWord : false
    }
}

// const trie = new Trie()

// trie.addWord('abc')
// trie.addWord('a')
// trie.addWord('b')
// trie.addWord('c')

// console.log(trie.hasWord('a'))
// console.log(trie.children)
// console.log(trie.children["a"])
// console.log(trie.children["a"].children["b"].children)
