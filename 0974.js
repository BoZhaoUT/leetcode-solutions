/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraysDivByK2 = (nums, k) => {
  const n = nums.length
  const dp = Array.from({ length: n }, () => Array(n).fill(0))
  let result = 0

  for (let i = 0; i < n; i++) {
    dp[i][i] = nums[i]
    if ((nums[i] % k) === 0) {
      result++
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      const sum = dp[i + 1][j] + dp[i][j - 1] - dp[i + 1][j - 1]
      dp[i][j] = sum
      if (sum % k === 0) {
        result++
      }
    }
  }

  return result

}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraysDivByK = (nums, k) => {
  // freq[r] = how many prefix sums had remainder r so far
  const freq = new Array(k).fill(0)
  freq[0] = 1               // empty prefix ⇒ remainder 0

  let prefix = 0
  let result = 0

  for (const num of nums) {
    prefix += num
    // make remainder positive and within [0..k-1]
    let remainder = prefix % k
    if (remainder < 0) {
      remainder += k
    }

    // we can do this because the "difference" between the subway including num and some previous
    // subarray is a mutiple of k
    result += freq[remainder]            // all prior prefixes with same remainder
    freq[remainder]++;                 // include current prefix
  }

  return result;
};


console.log(subarraysDivByK([4,5,0,-2,-3,1], 5)) // 7
console.log(subarraysDivByK([5], 9)) // 0
