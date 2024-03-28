'use strict'
// ok
class Solution {
  findElements(arr, n){
    let res = [];
    let sortedArr = arr.sort((a, b) => {return a - b});
    for(let i = 0; i < n-2; i++) {
      res.push(sortedArr[i])
    }
    return res;
  }
}

module.exports = Solution;