'use strict'
// Time Limit Exceeded	251 / 271
function print2largest(arr, n) {
  let t = 0;
  let m = 0;
  while(t < 2) {
    let temp = Math.max(...arr);
    if(temp != m) {
      m = temp;
      arr[arr.indexOf(temp)] = -Infinity;
      t++; 
    } else {
      arr[arr.indexOf(temp)] = -Infinity;
    }     
  }

  if(m == -Infinity) return -1;
  return m;
}
// Correct
function print2largest1(arr, n) {
  let sortedArr = arr.sort((a, b) => {return b-a});
  let m2 = 0, count = 0;
  for(let i = 0; i < n; i++) {
    if(sortedArr[i] != m2) {
      m2 = sortedArr[i];
      count++;
    }
    if(count == 2) {
      return sortedArr[i];
    }
  }
  return -1;
}

module.exports = print2largest1;
