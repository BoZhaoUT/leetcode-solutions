/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const checkSubarraySum = (nums, k) => {
  const n = nums.length

  const dp = Array.from({ length: n}, () => Array(n).fill(0))

  for (let i = 0; i < n; i++) {
    dp[i][i] = nums[i]
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      const subArraySum = dp[i][j - 1] + nums[j]
      if (subArraySum % k === 0) {
        return true
      }
      dp[i][j] = subArraySum
    }
  }
  return false
};

/**
 * @param {number[]} nums - The input array of non-negative integers
 * @param {number} k - The divisor (always >= 1 based on constraints)
 * @return {boolean} - True if there exists a subarray of length >= 2 whose sum is divisible by k
 */
const checkSubarraySum2 = (nums, k) => {
  // This object keeps track of the earliest index where each (prefix sum % k) value appears.
  // Start with mod 0 at index -1 to handle subarrays starting at index 0.
  const modIndex = { 0: -1 };

  // Running prefix sum of the array
  let sum = 0;

  // Iterate through each element of the array
  for (let i = 0; i < nums.length; i++) {
    // Update the running sum with the current element
    sum += nums[i];

    // Compute the modulo of the running sum with k.
    // If two different prefix sums have the same mod value,
    // their difference (i.e. the subarray sum) is divisible by k.
    const mod = sum % k;

    // Check if we've seen this modulo value before
    if (mod in modIndex) {
      // If the current index and the previous index with the same mod are at least 2 apart,
      // it means the subarray length is >= 2 and its sum is divisible by k.
      if (i - modIndex[mod] > 1) {
        return true; // Found a valid subarray
      }
    } else {
      // If this mod value hasn't been seen before, store the current index.
      // We only store the *first* occurrence because we want the largest possible subarray length later.
      modIndex[mod] = i;
    }
  }

  // If no such subarray was found, return false
  return false;
};

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6)) // true
console.log(checkSubarraySum([23, 2, 6, 4, 7], 6)) // true

console.log(checkSubarraySum([23, 3], 5)) // false
console.log(checkSubarraySum([23], 5)) // false
console.log(checkSubarraySum([3, 2], 5)) // true
console.log(checkSubarraySum([3, 3], 5)) // false
console.log(checkSubarraySum([99, 2], 1)) // true
console.log(checkSubarraySum([1], 1)) // false

console.log(checkSubarraySum([23, 2, 4, 6, 6], 7)) // true
