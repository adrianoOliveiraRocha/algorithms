'use strict'

/**
 * @param {number[][]} mat
 * @param {number} n
 * @param {number} m
 * @returns {number}
*/
//Problem Solved Successfully
class Solution {
  constructor() {
    // this.test1();
    // this.test2();
    // this.test3();
    // this.test4();
    this.test5();
  }

  test1() {
    let mat = [
      [0, 1, 1, 1],
      [0, 0, 1, 1],
      [0, 0, 1, 1]
    ]
    let n = 3, m = 4;
    console.log(this.maxOnes(mat, n, m));
  }

  test2() {
    let mat = [
      [0, 0, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 1, 1],
      [0, 0, 0, 1, 1, 1, 1]
    ]
    let n = 4, m = 7;
    console.log(this.maxOnes(mat, n, m));
  }

  test3() {
    let mat = [
      [0, 0, 0, 1, 1, 1, 1],
      [0, 0, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 1, 1],
      [0, 0, 1, 1, 1, 1, 1]
    ]
    let n = 4, m = 7;
    console.log(this.maxOnes(mat, n, m));
  }

  test4() {
    let mat = [
      [0, 1, 1, 1],
      [0, 0, 1, 1],
      [0, 0, 1, 1]
    ]
    let n = 3, m = 4;
    console.log(this.maxOnes(mat, n, m));
  }

  test5() {
    /*
    Your Code's output is: 
    8
    It's Correct output is: 
    3
    */
    let mat = [
      [0, 0, 1],
      [0, 1, 1],
      [0, 1, 1],
      [1, 1, 1],
      [0, 0, 1],
      [0, 0, 1],
      [0, 1, 1],
      [0, 0, 1],
      [0, 0, 0],
      [1, 1, 1]
    ];
    let n = 10, m = 3;
    console.log(this.maxOnes(mat, n, m));
  }

  maxOnes(mat, n, m) {
    let res = {};
    for(let i = 0; i < mat.length; i++) {
      if(mat[i].indexOf(1) > -1) {
        res[i] = mat[i].indexOf(1);
      }        
    }
    
    let mValue = Math.min(...Object.values(res));
    let mKey = null;
    Object.keys(res).forEach(k => {
      if(res[k] == mValue && !mKey) {
        mKey = k;
      }
    });
    return mKey;
  }
}

new Solution();