'use strict'

class Solution {

  multiply(a, b, n) {
    let i = 0, column = 0;
    let k = 2 * n;
    let res = [], sub = [], indexSub = 0;
    while(i < n) {
      let j = 0;
      let c = 0;
      while(j < n) {
        c = c + a[i][j] * b[j][column];
        j++;
      } 
      sub[indexSub] = c;
      if(indexSub < n-1) {
        indexSub++;
      } else if(indexSub == n-1) {
        res.push(...sub)
        indexSub = 0;
      }
      c = 0
      column++
      k++;           
      if(k % n == 0) {
        i++, column = 0;
      }
    }
    return res
  }

}

module.exports = Solution;