/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0
    let right = height.length - 1
    let result = 0
    let maxLeft = 0
    let maxRight = 0
    while (left <= right) {
        // left bar is lower, right is higher
        if (height[left] <= height[right]) {
            // new max left, no water can be trapped between previous maxLeft
            // and the new maxLeft
            if (height[left] >= maxLeft) {
                maxLeft = height[left]
            } else {
                // add trapped water
                result += maxLeft - height[left]
            }
            left++
        } else {
            // right bar is lower
            if (height[right] >= maxRight) {
                maxRight = height[right]
            } else {
                result += maxRight - height[right]
            }
            right--
        }
    }
    return result
};


// class Solution {
//     public:
//         int trap(int A[], int n) {
//             int left=0; int right=n-1;
//             int res=0;
//             int maxleft=0, maxright=0;
//             while(left<=right){
//                 if(A[left]<=A[right]){
//                     if(A[left]>=maxleft) maxleft=A[left];
//                     else res+=maxleft-A[left];
//                     left++;
//                 }
//                 else{
//                     if(A[right]>=maxright) maxright= A[right];
//                     else res+=maxright-A[right];
//                     right--;
//                 }
//             }
//             return res;
//         }
//     };

