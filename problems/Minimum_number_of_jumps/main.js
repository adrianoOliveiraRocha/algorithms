'use strict'

function minJumps(arr, n) {
  let jumps = 0;
  let i = 0;
  while(i < n) {
    
    if(arr[i] == 0 && i < n-1) {
      return -1;
    } else if(i >= n-1) {
      return jumps;
    } else if(i + arr[i] >= n-1) {
      jumps++; // on more step is enought
      return jumps;
    } else {
      let possibleSteps = arr[i];
      let max = 0;
      for(let j = i; j <= i + possibleSteps && j <= n-1; j++) {
        max = Math.max(max, arr[j]);
      } 
      
      i += arr.indexOf(max);
      jumps++;
    }

  }
  
  return jumps;
}



function minJumps1(arr, n) {
  let count = 0;
  let pos = 0;
  let max = 0;

  for(let i = 0; i < n; i++) {
    max = Math.max(max, i+arr[i]);  
    if(i == pos) {
      pos = max;
      count++
    }
    if(pos > n-1) {
      return count;
    }
  }
  return -1;
}



function minJumps2(arr, n) {
  var jumps = Array.from({length: n}, (_, i) => 0);;
  var i, j;
  if(arr[0] == 0) return -1;

  if (n == 0 || arr[0] == 0) return Number.MAX_VALUE;
  jumps[0] = 0;

  for (i = 1; i < n; i++) {
    jumps[i] = Number.MAX_VALUE;
    for (j = 0; j < i; j++) {
      if (i <= j + arr[j] && jumps[j] != Number.MAX_VALUE) {
        jumps[i] = Math.min(jumps[i], jumps[j] + 1);
        break;
      }
    }
  }
  if(jumps[n-1] == 1.7976931348623157e+308) return -1;
  return jumps[n - 1];
}

function minJumps3 (arr,n) {
  //code here
  if(n == 1) {
    return 0;
  }
  if(arr[0] == 0) {
    return -1
  } else {
    let maxSteps = arr[0];
    let jumps = 1;
    let steps = arr[0]
    
    for(let i = 1; i < n; i++) {
      if(i == n-1) return jumps;
      maxSteps = Math.max(maxSteps, i+arr[i]);
      steps--;
      if(steps == 0){            
        jumps++;
        if(maxSteps <= i){
          return -1
        }
        steps = maxSteps - i
      }
    }
    
    return -1
  }
}


module.exports = minJumps3;