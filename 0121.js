/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0]
    const buyingPrices = []
    // buyingPrices[i] denotes the lowest buying price bettwen day 0 and day i
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        buyingPrices.push(min)
    }

    let result = 0
    for (let i = prices.length - 1; i > 0; i--) {
        result = Math.max(result, prices[i] - buyingPrices[i - 1])
    }
    return result
};


// most coincise and efficient
// var maxProfit = function(prices) {
//     let min = prices[0]
//     let result = 0
//     prices.forEach(price => {
//         min = Math.min(min, price)
//         result = Math.max(result, price - min)
//     })
//     return result
// };

// Kadane's algorithm
// var maxProfit = function(prices) {
//     let curr = 0
//     let result = 0
//     for (let i = 1; i < prices.length; i++) {
//         // cumulate profilt of buy today and sell tmr
//         curr += prices[i] - prices[i - 1]
//         // abandon cumulative profit if it's negative
//         curr = Math.max(0, curr)
//         // record max cumulative profit
//         result = Math.max(curr, result)
//     }
//     return result
// };

// public int maxProfit(int[] prices) {
//     int maxCur = 0, maxSoFar = 0;
//     for(int i = 1; i < prices.length; i++) {
//         maxCur = Math.max(0, maxCur += prices[i] - prices[i-1]);
//         maxSoFar = Math.max(maxCur, maxSoFar);
//     }
//     return maxSoFar;
// }


console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7, 6, 1, 5, 3, 4]))
console.log(maxProfit([7,6,4,3,1]))