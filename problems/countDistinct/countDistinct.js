'use strict'

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number[]} 
 */
 
/*
this is lie :(

14 5
78 16 94 36 87 93 50 22 63 28 91 60 64 27
Your Code's output is: // my code return 5 5 5 5 5 5 5 5 5 5
It's Correct output is:  
5 5 5 5 5 5 5 5 5 5
Output Difference
5 5 5 5 5 5 5 5 5 5

*/

class Solution {
  constructor() {
    this.test1(); // [ 3, 4, 4, 3 ]
    this.test2(); // [ 2, 1 ]
    this.test3(); /*[
                      5, 5, 5, 5, 5,
                      5, 5, 5, 5, 5
                    ]
                    */
  }

  test1() {
    let N = 7, K = 4
    let A = [1,2,1,3,4,2,3];
    console.log(this.countDistinct(A, N, K));
  }

  test2() {
    let N = 3, K = 2;
    let A = [4,1,1];
    console.log(this.countDistinct(A, N, K));
  }

  test3() {
    let N = 14 , K = 5
    let A = [78, 16, 94, 36, 87, 93, 50, 22, 63, 28, 91, 60, 64, 27];
    console.log(this.countDistinct(A, N, K));
  }

  countDistinct(A, n, k) {
    let i = 0, j = k, res = [];
    while(j <= n) {
      let sub = [...A.slice(i,j)];
      let s = new Set(sub);
      res.push(k - (k - s.size));
      i++; j++
    }
    return res;
  }
}

new Solution();