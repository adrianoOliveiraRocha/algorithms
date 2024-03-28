'use strict'
/*
function kthSmallest(arr,l,r,k) {
  let i = 0;
  let res;
  while(i < k) {
    res = Math.min(...arr);
    arr[arr.indexOf(res)] = Infinity;
    i++;
  }
  return res;
}
*/

function kthSmallest(arr,l,r,k) {
  arr.sort((a, b) => a-b);
  return arr[k-1];
}

module.exports = kthSmallest;