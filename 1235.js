/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
const jobScheduling = (startTime, endTime, profit) => {
  // merge all input arrays into one
  const jobs = []
  for (let i = 0; i < startTime.length; i++) {
    jobs.push([startTime[i], endTime[i], profit[i]])
  }
  // sort all the jobs by startTime in increasing order
  jobs.sort((a, b) => a[0] - b[0])

  const dp = []

  /**
   * @param {number} index
   * @return {number} maxproift of all possible job combinations
   */
  const backtrack = (index) => {
    // retreive previously calculated result if exists
    if (dp[index] !== undefined) {
      return dp[index]
    }
    // index out of range
    if (index === startTime.length || index == -1) {
      return 0
    }

    const nextPossibleJobIndex = binarySearch(
      jobs[index][1], // current job's end time
      index + 1, // smallest possible index for the next job
      startTime.length - 1 // largest possible index for the next job
    )
    // case 1: the current job is included
    const profit1 = jobs[index][2] + backtrack(nextPossibleJobIndex)
    // case 2: the current job is excluded
    const profit2 = backtrack(index + 1)
    // decide whether to include the current job
    const maxProfit = Math.max(profit1, profit2)
    dp[index] = maxProfit
    return maxProfit
  }

  /**
   * @param {number[]} endtime end time of current job
   * @param {number} left smallest possible index for the next job
   * @param {number} right largest possible index for the next job
   * @return {number} the index of the next job with earleist start time that has no overlap with the input endtime
   */
  const binarySearch = (endtime, left, right) => {
    let answer = -1
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      // found a job that has no overlap with input job's endtime
      // record this job's index and then contineu checking remaining between left and middle
      if (jobs[mid][0] >= endtime) {
        answer = mid
        right = mid - 1
      } else {
        // overlap with input job's endtime
        left = mid + 1
      }
    }
    return answer
  }
  return backtrack(0)
}

console.log(jobScheduling([1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70])) // 120
console.log(
  jobScheduling([1, 2, 3, 4, 6], [3, 5, 10, 6, 9], [20, 20, 100, 70, 60])
) // 150
console.log(jobScheduling([1, 1, 1], [2, 3, 4], [5, 6, 4])) // 6

// https://leetcode.com/problems/maximum-profit-in-job-scheduling/discuss/2848829/JS-oror-Multiple-Approaches-oror-Easy-to-understand
