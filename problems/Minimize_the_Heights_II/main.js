'use strict'

class Solution {
  //Function to get the minimum difference between the heights.
  getMinDiff(arr, n, k) {
    let m = arr.reduce((ac, curr) => ac + curr) / n;    
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] < m) { 
        arr[i] += k;
      } else {
        arr[i] -= k;
      }
    }
    return Math.max(...arr) - Math.min(...arr);
  }
}

module.exports = Solution;