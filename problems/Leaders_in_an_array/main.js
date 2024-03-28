'use strict'
// Time limit excepted
function leaders(arr, n) {
  let leaders = [];
  let max = arr[n-1];
  for(let i = n-1; i >= 0; i--) {
    if(arr[i] >= max) {
      max = arr[i]; 
      leaders.push(arr[i]);
    }
  }
  return leaders.reverse();
}

// Correct
function leadersCorrect(arr, n) {
  let leaders = []
  let max = arr[n-1]
  for(let i = n-1; i >= 0; i--) {
    if(arr[i] >= max) {
      max=arr[i]
      leaders.push(max)
    }
  }
  leaders.reverse()
  return leaders
}


module.exports = leaders
