/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const result = []
    const last = Array(26).fill(-1)
    // go through the given string s and record the index of 
    // the last occurence of each character
    for (let i = 0; i < s.length; i++) {
        const charCode = getNormalizedCharCode(s[i])
        last[charCode] = i
    }

    let end = 0
    let prev = 0 // length of previous partition
    for (let i = 0; i < s.length; i++) {
        // for each char between 0 and i, get the max of all their
        // last occurence index and store it in 'end'
        // once i == end, it means all chars on the left hand side of i
        // do not occur on the right hand of i
        const lastIndex = last[getNormalizedCharCode(s[i])]
        end = Math.max(end, lastIndex)
        if (i === end) {
            result.push(i + 1 - prev)
            prev = i + 1
        }
    }
    return result
};

const getNormalizedCharCode = char => 
    char.charCodeAt(0) - "a".charCodeAt(0)


/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels2 = function(S) {
    const last = new Array(26).fill(-1);
    const partitions = [];
    let anchor = 0;
    let end = 0;
    
    for (let i = 0; i < S.length; i++) {
        last[S.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
    }

    for (let i = 0; i < S.length; i++) {
        end = Math.max(end, last[S.charCodeAt(i) - 'a'.charCodeAt(0)]);
        if (i === end) {
            partitions.push(i - anchor + 1);
            anchor = i + 1;
        }
    }
    return partitions;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"))