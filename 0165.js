/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1 = version1.split(".")
    const v2 = version2.split(".")
    let i = 0
    while (v1[i] !== undefined && v2[i] !== undefined) {
        if (+v1[i] > +v2[i]) {
            return 1
        }
        if (+v1[i] < +v2[i]) {
            return -1
        }
        i++
    }
    const longerVersion = v1.length > v2.length ? v1 : v2
    let hasNonZero = false
    while (!hasNonZero && longerVersion[i] !== undefined) {
        if (+longerVersion[i] !== 0) {
            hasNonZero = true
        }
        i++
    }
    if (!hasNonZero) {
        return 0
    }
    return v1.length > v2.length ? 1 : -1
};
