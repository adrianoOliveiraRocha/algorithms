'use strict'

class Solution {
  constructor() {
    this.test1();
  }

  test1() {
    console.log(this.catAndMouse(2, 5, 4));
  }

  test2() {

  }

  catAndMouse(x, y, z) {
    while(true) {
      if(x < z) x++;
      else x--;
      if(y < z) y++;
      else y--;
      if(x == y && y == z) return "Mouse C";
      if(x == z) return "Cat A";
      if(y == z) return "Cat B";
    }
  }
}

new Solution();