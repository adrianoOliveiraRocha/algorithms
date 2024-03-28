'use strict'

class Solution {
  constructor() {
    this.test();
  }

  test() {
    let a = [3, 2, 1, 2, 3];
    this.minimumDistances(a)
  }

  minimumDistances(a) {
    let map = {};
    let d = [];
    for(let i = 0; i < a.length; i++) {
      if(!map[a[i]]) 
        map[a[i]] = [i];
      else
        d.push(i - map[a[i]])
    }
    console.log(map, d);
  }
}

new Solution();