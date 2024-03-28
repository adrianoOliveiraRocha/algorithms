'use strict'
// Success
class Solution {
  constructor() {
    // this.test1();
    // this.test2();
    this.test3();
  }

  hurdleRace(k, height) {
    let major = Math.max(...height);
    if(major > k) return major - k;
    else return 0;
  }

  test1() {
    let height = [1, 2, 3, 3, 2];
    let k = 1;
    console.log(this.hurdleRace(k, height));
  }

  test2() {
    let height = [1, 6, 3, 5, 2];
    let k = 4;
    console.log(this.hurdleRace(k, height));
  }

  test3() {
    let height = [2, 5, 4, 5, 2];
    let k = 7;
    console.log(this.hurdleRace(k, height));
  }
}

new Solution();