'use strict'

class Solution {
  constructor() {
    this.test1();
  }

  test1() {
    console.log(this.findDigits(124));
  }
  // Success
  findDigits(n) {
    let res = 0;
    let nArr = n.toString().split("");
    nArr.forEach(el => {
      if(n % parseInt(el) == 0) {
        res++;
      }
    }); 
    return res;
  }
}

new Solution();