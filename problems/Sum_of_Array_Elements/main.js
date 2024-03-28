'use strict'

function IsPerfect(arr, n) {
  if(n % 2 == 0) return 'NOT PERFECT';
  let j = n-1;
  for(let i = 0; i < n; i++) {
    if(arr[i] != arr[j]) return 'NOT PERFECT';
    j--;
  }
  return 'PERFECT';
}

module.exports = IsPerfect;