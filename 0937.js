/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const digitLogs = []
    const stringLogs = []
    let firstSpace
    for (log of logs) {
        firstSpace = log.indexOf(" ")
        // digit log
        if (/\d/.test(log[firstSpace + 1])) {
            digitLogs.push(log)
        } else { // string log
            stringLogs.push(log)
        }
    }
    stringLogs.sort(sortStringlogs)


    return stringLogs.concat(digitLogs)
};

const sortStringlogs = (logA, logB) => {
    const firstSpaceA = logA.indexOf(" ")
    const firstSpaceB = logB.indexOf(" ")
    let indexA = firstSpaceA + 1
    let indexB = firstSpaceB + 1
    while (logA[indexA] && logB[indexB]) {
        if (logA[indexA] < logB[indexB]) {
            return -1
        }
        if (logA[indexA] > logB[indexB]) {
            return 1
        }
        indexA++
        indexB++
    }
    if (logA[indexA]) {
        return 1
    }
    if (logB[indexB]) {
        return -1
    }
    // compare identifier
    indexA = 0
    indexB = 0
    while (indexA <= firstSpaceA && indexB <= firstSpaceB) {
        if (logA[indexA] < logB[indexB]) {
            return -1
        }
        if (logA[indexA] > logB[indexB]) {
            return 1
        }
        indexA++
        indexB++
    }
}


// const logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
// console.log(reorderLogFiles(logs))
