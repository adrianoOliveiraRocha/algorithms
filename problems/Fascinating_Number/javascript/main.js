'use strict'

class Solution {
  fascinating(N){
    let n0 = N.toString().split('');
    let n1 = (N * 2).toString().split("");
    let n2 = (N * 3).toString().split("");
    let num = n0.concat(n1, n2);
    let np = {}
    for(let i = 1; i < 10; i++) {
      if(!num.includes(i.toString())) {
        return 'Not Fascinating';
      } else if(num.includes(i.toString() && np[i])) {
        return 'Not Fascinating';
      } else if(num.includes(i.toString()) && !np[i]){
        np[i] == true
      }
    }
    return 'Fascinating';
  }
}

module.exports = Solution;
