'use strict'

//User function Template for javascript

/**
 * @param {number[]} A
 * @param {number} n
 * @returns {number[][]}
*/

class Solution {
  constructor() {
    this.test1();
    // this.test2();
  }

  test1() {
    let A = [100,180,260,310,40,535,695];
    console.log(this.stockBuySell(A, A.length));
  }

  test2() {
    let A = [4,2,2,2,4]
    console.log(this.stockBuySell(A, A.length));
  }

  stockBuySell(A, n) {
    let purchase = 0, sell = 0;
    let pairs = [], indexPair = 0;
    
    for(let i = 1; i < n; i++) {
      if(A[i] >= A[purchase]) {
        sell = i;
      } else {
        if(A[purchase] < A[sell]) pairs.push([purchase, sell]);
        indexPair++;
        purchase = i;
      }
    }
    pairs.push([purchase, sell]);
    return pairs;
  }
}

new Solution();