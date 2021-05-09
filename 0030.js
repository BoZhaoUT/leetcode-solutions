/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    // count the number of occurences of each word in words
    const counts = {}
    words.forEach(word => counts[word] = counts[word] ? counts[word] + 1 : 1)

    const result = []
    const wordLength = words[0].length

    for (let i = 0; i < s.length - words.length * wordLength + 1; i++) {
        const seen = {}
        let j = 0
        while (j < words.length) {
            const word = s.substr(i + j * wordLength, i + (j + 1) * wordLength)
            if (counts[word]) {
                seen[word] = seen[word] ? seen[word] + 1 : 1
                if (seen[word] > counts[word]) {
                    break
                }
            } else {
                break
            }
            j++
        }
        if (i === words.length) {
            result.push(i)
        }
    }

    return result
};

// class Solution {
//     public List<Integer> findSubstring(String s, String[] words) {
//         final Map<String, Integer> counts = new HashMap<>();
//         for (final String word : words) {
//             counts.put(word, counts.getOrDefault(word, 0) + 1);
//         }
//         final List<Integer> indexes = new ArrayList<>();
//         final int n = s.length(), num = words.length, len = words[0].length();
//         for (int i = 0; i < n - num * len + 1; i++) {
//             final Map<String, Integer> seen = new HashMap<>();
//             int j = 0;
//             while (j < num) {
//                 final String word = s.substring(i + j * len, i + (j + 1) * len);
//                 if (counts.containsKey(word)) {
//                     seen.put(word, seen.getOrDefault(word, 0) + 1);
//                     if (seen.get(word) > counts.getOrDefault(word, 0)) {
//                         break;
//                     }
//                 } else {
//                     break;
//                 }
//                 j++;
//             }
//             if (j == num) {
//                 indexes.add(i);
//             }
//         }
//         return indexes;
//     }
// }

console.log(findSubstring("barfoothefoobarman", ["foo","bar"])) // [0,9]
console.log(
    findSubstring(
        "wordgoodgoodgoodbestword",
        ["word","good","best","word"]
    )
) // []
console.log(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"])) // [6,9,12]




// class Solution(object):
//     def findSubstring(self, s, words):
//         """
//         :type s: str
//         :type words: List[str]
//         :rtype: List[int]
//         """
//         wordBag = Counter(words)   # count the freq of each word
//         wordLen, numWords = len(words[0]), len(words)
//         totalLen, res = wordLen*numWords, []
//         for i in range(len(s)-totalLen+1):   # scan through s
//             # For each i, determine if s[i:i+totalLen] is valid
//             seen = defaultdict(int)   # reset for each i
//             for j in range(i, i+totalLen, wordLen):
//                 currWord = s[j:j+wordLen]
//                 if currWord in wordBag:
//                     seen[currWord] += 1
//                     if seen[currWord] > wordBag[currWord]:
//                         break
//                 else:   # if not in wordBag
//                     break    
//             if seen == wordBag:
//                 res.append(i)   # store result
//         return res