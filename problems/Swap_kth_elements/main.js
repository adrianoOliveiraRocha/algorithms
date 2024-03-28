'use strict'
// success
class Solution{
  swapKth(arr, n, k){
    let temp = arr[k-1]
    arr[k-1] = arr[n-k]
    arr[n-k] = temp
    return arr;
  }
}

module.exports = Solution;