'use strict'

function firstElementKTime(arr, n, k){
  let repeateds = {}
  for(let i = 0; i < n; i++) {
    if(repeateds[arr[i]]) {
      repeateds[arr[i]]++;
    } else {
      repeateds[arr[i]] = 1;
    }

    if(repeateds[arr[i]] == k) return arr[i];
  }
  return -1;
}

module.exports = firstElementKTime
