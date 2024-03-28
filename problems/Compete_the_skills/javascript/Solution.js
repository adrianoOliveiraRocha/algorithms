'use strict'

class Solution {
  constructor() {
    this.ca = 0;
    this.cb = 0;
  }
  scores(a, b) {
    //store the scores at this.ca and this.cb
    //code here
    for(let i = 0; i < a.length; i++) {
      if(a[i] > b[i]) {
        this.ca ++;
      } else if(a[i] < b[i]) {
        this.cb ++;
      }
    }
  }
}

module.exports = Solution;