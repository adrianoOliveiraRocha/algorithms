'use strict'
// Success
function getMoreAndLess(arr,n, x) {
  let res = [0, 0];
  for(let i = 0; i < n; i++) {
    if(arr[i] <= x) res[0]++;
    if(arr[i] >= x) res[1]++;
  }
  return res;
}

module.exports = getMoreAndLess;