'use strict'

/**
 * @param {number[]} arr
 * @param {number} N
 * @param {number} K
 * @returns {number}
*/
//Problem Solved Successfully
class Solution {
  constructor() {
    this.test1();
    this.test2();
  }

  test1() {
    let N = 7 
    let K = 50
    let arr = [1, 12, 5, 111, 200, 1000, 10]
    console.log(this.toyCount(arr, N, K));
  }

  test2() {
    let N = 3 
    let K = 100
    let arr = [20, 30, 50]
    console.log(this.toyCount(arr, N, K));
  }

  toyCount(arr, N, K) {
    arr.sort((a, b) => a - b);
    let res = [], t = 0;
    for(let i = 0; i < N; i++) {
      t+=arr[i];
      if(t > K) {
        return res.length;
      } else {
        res.push(arr[i]);
      }
    }
    return res.length;
  }
}

new Solution();