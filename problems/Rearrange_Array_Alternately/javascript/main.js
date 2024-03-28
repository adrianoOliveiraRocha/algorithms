'use strict'

function rearrange(arr, n) {
  let i = 0, j = n-1;
  while(i < j) {
    console.log(j, i);
    i++, j--;
  }
}
/*
Test Cases Passed: 
11 /191
Time Limit Exceeded

function rearrange(arr, n) {
  let i = 0, j = n-1, index = -1, map = {};
  while(i <= j) {
    let max = arr[j];
    let min = arr[i];
    map[++index] = max, map[++index] = min;
    i++, j--;
  }

  for(let i = 0;  i < Object.keys(map).length; i++) {
    arr[i] = map[i];
  } 
}
*/
/*
Test Cases Passed: 
13 /191
Time Limit Exceeded

function rearrange(arr, n){
  let toggle = 1;
  let aux = [...arr];
  let i = 0, j = n-1, indexArr = 0;
  while(i != j) {
    if(toggle == 1) {
      let max = aux[j];
      j--, toggle = 0;
      arr[indexArr] = max; indexArr++;
    } else {
      let min = aux[i];
      i++, toggle = 1;
      arr[indexArr] = min; indexArr++;
    }
  }
  console.log(arr);
}
*/


module.exports = rearrange;