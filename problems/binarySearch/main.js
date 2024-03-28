'use strict'
// if n is par, mid = (parseInt(init + end) / 2) + 1
function binarysearch(arr, n, k) {
  let init = 0, end = n - 1, mid = parseInt(end / 2);
  
  function test(init, mid, end) {
    if(k == arr[init]) {
      return init;
    } else if(k == arr[mid]) {
      return mid;
    } else if(k == arr[end]) {
      return end;
    } else {
      return null
    };
  }

  let res = test(init, mid, end);
  if(res != null && res >= 0) return res;

  while(init < mid) {
    if(k < arr[mid]) {
      end = mid;
      mid = parseInt((init + end) / 2);
    } else if(k > arr[mid]) {
      init = mid;
      mid = parseInt((init + end) / 2);
    } 

    let res = test(init, mid, end);
    if(res != null && res >= 0) return res;
    
  }

  return -1;
}

module.exports = binarysearch;