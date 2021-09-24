import collection.mutable.HashMap

object Solution {
    def wordPattern(pattern: String, s: String): Boolean = {
        val words = s.split(' ')
        // can't match with different lengthes
        if (pattern.length != words.length) {
            return false
        }

        val wordToPattern = HashMap[String, Char]()
        val patternToWord = HashMap[Char, String]()

        var i = 0
        while (i < pattern.length) {
            val patternChar = wordToPattern.getOrElse(word, "")
            if (patternChar != "" && patternChar != pattern(i)) {
                return false
            } else {
                wordToPattern.addOne(words(i), pattern(i))
            }

            val word = patternToWord.getOrElse(patternChar, "")
            if (word != "" && word != words(i)) {
                return false
            } else {
                patternToWord.addOne(words(i), patternChar(i))
            }
            i += 1
        }
        return true
    }
}
