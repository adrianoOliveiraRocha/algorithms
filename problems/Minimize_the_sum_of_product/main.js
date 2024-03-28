'use strict'
// Time Limit Exceeded; Test cases: 143 / 150
function minValue(arr, brr, n){
  arr.sort((a, b) => a-b);
  brr.sort((a, b) => b-a);
  let res = 0;
  console.log(arr, brr);
  for(let i = 0; i < n; i++) {
    let n = arr[i] * brr[i];
    res += n;
  }

  return res;
}

module.exports = minValue;