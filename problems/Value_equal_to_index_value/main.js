'use strict'
// Problem Solved Successfully
function valueEqualToIndex(arr, n) {
  let res = [];
  for(let i = 0; i < n; i++) {
    if(arr[i] == i+1) {
      res.push(arr[i]);
    }
  }
  if(res.length > 0) return res;
  else return ['Not Found'];
}

module.exports = valueEqualToIndex;