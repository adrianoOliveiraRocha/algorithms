'use strict'
/*
I dont understand this problem :(
*/
class Solution {

  constructor() {
    this.test1();
    this.test2();
    this.test3();
    this.test4();
    this.test5();
  }

  test1() {
    let arr = [3,0,0,2,0,4];
    console.log(this.trappingWater(arr));
  }

  test2() {
    let arr = [7,4,0,9];
    console.log(this.trappingWater(arr));
  }

  test3() {
    let arr = [6,9,9];
    console.log(this.trappingWater(arr));
  }

  test4() {
    let arr = [5, 5, 5];
    console.log(this.trappingWater(arr));
  }

  test5() {
    let arr = [8, 8, 2, 4, 5, 5, 1];
    console.log(this.trappingWater(arr));
  }

  trappingWater(arr, n) {
    if (n <= 2) {
      return 0;
    }

    let leftMax = new Array(n);
    let rightMax = new Array(n);

    leftMax[0] = arr[0];
    for (let i = 1; i < n; i++) {
      leftMax[i] = Math.max(leftMax[i - 1], arr[i]);
    }

    rightMax[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
      rightMax[i] = Math.max(rightMax[i + 1], arr[i]);
    }

    let waterTrapped = 0;
    for (let i = 0; i < n; i++) {
      waterTrapped += Math.min(leftMax[i], rightMax[i]) - arr[i];
    }

    return waterTrapped;
  }

  /*
  trappingWater(arr, n) {
    let level = Math.min(arr[0], arr[arr.length-1]);
    let t = 0;
    for(let i = 0; i < arr.length; i++) {
      let df = level - arr[i];
      if(df > 0) t+=df;
    }
    return t;
  }
  */

}

new Solution();