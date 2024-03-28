'use strict'
/**
 * @param {string[]} arr
 * @param {number} n
 * @returns {string}
 */

function longestCommonPrefix(arr, n) {
  arr.sort();
  let length = arr[0].length, pre = '';
  for(let i = 0; i < length; i++) {
    if(arr[0][i] == arr[n-1][i]) pre+=arr[0][i]; 
    else break;
  }
  return pre.length > 0 ? pre : -1;
}

module.exports = longestCommonPrefix;