'use static'

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {

  constructor() {
    this.test1();
  }

  test1() {
    let arr = [1, 1, 2, 2, 3, 3, 4, 50, 50, 65, 65];
    console.log(this.findOnce(arr, arr.length));
  }
  // Success
  findOnce(arr,n) {
    for(let i = 0; i < n; i+=2) {
      if(arr[i] != arr[i+1]) return arr[i];
    }
  }

}

new Solution();
