'use strict'

// Não sei oque se pede

class Solution {

  constructor() {
    this.test1();
    this.test2();
  }

  test1() {
    console.log(this.utopianTree(6));
  }

  test2() {
    console.log(this.utopianTree(3));
  }

  utopianTree(n) {
    let height = 1;
    for(let i = 1; i < n; i++) {
      if(i % 2 == 0) height++;
      else height = 2 * height;
    }
    return height
  }

}

new Solution();