'use strict'
/*
Test Cases Passed: 
137 /140
Time Limit Exceeded
*/
class Solution {
  leftElement(arr, n) {
    let a = new Int32Array(arr).sort();
    if(n % 2 !== 0) return a[parseInt(n/2)];
    else {
      return(a[parseInt(n/2) - 1])
    }    
  }
}

class Solution1 {
  leftElement(arr, n) {
    const freqArr = new Array(1001).fill(0);
    
    for(let i=0; i<n; i++) {
      freqArr[arr[i]]++;
    }
    console.log(freqArr)
    let ele = -1;
    let sum = 0;
    const required = Math.floor((n-1)/2) + 1;

    for(let i=1; i<1001; i++) {
      sum += freqArr[i];
      if(sum >= required) {
          ele = i;
          break;
      }
    }
    return ele;    
  }
}

module.exports = Solution;