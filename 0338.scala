object Solution {
    def countBits(n: Int): Array[Int] = {

    }
}

// public int[] countBits(int num) {
//     int result[] = new int[num + 1];
//     int offset = 1;
//     for (int index = 1; index < num + 1; ++index){
//         if (offset * 2 == index){
//             offset *= 2;
//         }
//         result[index] = result[index - offset] + 1;
//     }
//     return result;
// }

// 0 -> 0      -> 0
// 1 -> 1      -> 1
// 2 -> 10     -> 1
// 3 -> 11     -> 2

// 4 -> 100    -> 1
// 5 -> 101    -> 2
// 6 -> 110    -> 2
// 7 -> 111    -> 3

// 8 -> 1000   -> 1
// 9 -> 1001   -> 2
// 10 -> 1010  -> 2
// 11 -> 1011  -> 3

// 12 -> 1100  -> 2
// 13 -> 1101  -> 3
// 14 -> 1110  -> 3
// 15 -> 1111  -> 4

// 16 -> 10000 -> 1
// 17 -> 10001 -> 2
// 18 -> 10010 -> 2
// 19 -> 10011 -> 3

// https://leetcode.com/problems/counting-bits/discuss/79557/How-we-handle-this-question-on-interview-Thinking-process-%2B-DP-solution