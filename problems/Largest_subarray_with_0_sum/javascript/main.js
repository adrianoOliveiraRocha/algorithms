'use strict'
/*
1 - get the first negative number and the last negative number
2 - sum all between and including them
3 - sum the next numbers after the last negative number until arrive in the same value positine
*/
class Solution {
  maxLen(arr, n){
    let map = {}, sum = 0, maxLenght = 0;
    for(let i = 0; i < n; i++) {
      sum+=arr[i];
      if(map[sum]) {
        maxLenght = i - map[sum] > maxLenght ? i - map[sum] : maxLenght;
      } else {
        map[sum] = i;
      }
    }
    return maxLenght;
  }

  maxLenBruteForce(arr, n){
    let t = {'length': [0, 0]};
    for(let i = 0; i < n; i++) {
      for(let j = i+1; j <= n; j++) {
        if(arr.slice(i, j).reduce((ac, cv) => ac + cv) == 0) {
          if(j-i > t['length'][1] - t['length'][0]) {
            t = {'length': [i, j]};
          }
        }
      }
    }
    return arr.slice(t['length'][0], t['length'][1]).length;
  }
}

module.exports = Solution;