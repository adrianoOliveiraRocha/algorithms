'use strict'

class Solution {
  //Function to get the minimum difference between the heights.
  getMinDiff(arr, n, k) {
    let min = Math.min(...arr) + k;
    let max = Math.max(...arr) - k;
    return max - min
  }
}

module.exports = Solution;