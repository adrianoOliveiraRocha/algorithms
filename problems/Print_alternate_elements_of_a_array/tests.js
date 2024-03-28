'use strict'

function print(arr, n) {
  let res = [];
  for(let i = 0; i < n; i = i+2) {
      res.push(arr[i])
  }
  console.log(...res);
}