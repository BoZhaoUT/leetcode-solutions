// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// const subarraySum = (nums, k) => {
//   const n = nums.length
//   const dp = Array.from({ length: n }, () => Array(n).fill(0))
//   let result = 0

//   for (let i = 0; i < n; i++) {
//     dp[i][i] = nums[i]
//     if (nums[i] === k) {
//       result++
//     }
//   }
  
//   for (let i = n - 2; i >= 0; i--) {
//     for (let j = i + 1; j < n; j++) {
//       const sum = dp[i + 1][j] + dp[i][j - 1] - dp[i + 1][j - 1] 
//       // console.log({sum})
//       if (sum === k) {
//         result++
//       }
//       dp[i][j] = sum
//     }
//   }

//   return result
// }

const subarraySum = (nums, k) => {
  let count = 0;
  let prefix = 0;
  const freq = { 0: 1 } // we have 1 zero

  
  for (const x of nums) {
    prefix += x;  // update running prefix sum
    
    const need = prefix - k;  // what prefix we need from before
    
    if (freq[need]) {
      count += freq[need] // add how many times that prefix appeared
    }

    if (freq[prefix]) {
      freq[prefix] += 1
    } else {
      freq[prefix] = 1
    }
  }

  return count;
};

console.log(subarraySum([1, 1, 1], 2)) // 2
console.log(subarraySum([1, 2, 3], 3)) // 2

console.log(subarraySum([1], 3)) // 0
console.log(subarraySum([1], 1)) // 1
console.log(subarraySum([1, -2, 3], 1)) // 2
console.log(subarraySum([1, -2, 3], -1)) // 1
console.log(subarraySum([-3, -2, -1], -6)) // 1
