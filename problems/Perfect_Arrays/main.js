'use strict'

/*
  problem in this question:
  im my computer the response is PERFECT in the first test case (let arr = [1, 2, 3, 2, 1];)
  but here, the response of my code is NOT PERFECT.  :/    
*/

function IsPerfect(arr, n){
  let j = n-1;
  for(let i = 0; i < n; i++) {
    if(arr[i] !== arr[j]) return 'NOT PERFECT';
    j--;
  }
  return 'PERFECT';
}

module.exports = IsPerfect;