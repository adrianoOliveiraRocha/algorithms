'use strict'
// the absolute difference between any two elements is less than or equal to 1
class Solution {

  constructor() {
    this.test();
    this.test1();
    this.test2();
  }

  test() {
    let a = [1, 1, 2, 2, 4, 4, 5, 5, 5];
    console.log(this.pickingNumbers(a)); //5
  }

  test1() {
    let a = [4, 6, 5, 3, 3, 1];
    console.log(this.pickingNumbers(a)); //3
  }

  test2() {
    let a = [1, 2, 2, 3, 1, 2];
    console.log(this.pickingNumbers(a)); //5
  }

  pickingNumbers(a) {
    a.sort((a, b) => a-b);
    let indexRes = 0;
    let res = {}; 
    res[indexRes] = [a[0]];
    let sizes = [];
    for(let i = 1; i < a.length; i++) {
      if(Math.abs(a[i] - res[indexRes][0]) <= 1) {
        res[indexRes].push(a[i]);
      } else {
        sizes.push(res[indexRes].length);
        indexRes++;
        res[indexRes] = [a[i]];
      }
    }
    sizes.push(res[indexRes].length);
    return Math.max(...sizes);
  }
}

new Solution();

