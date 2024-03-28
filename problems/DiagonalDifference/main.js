'use strict'

let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
]

function diagonalDifference(arr) {
  let lr = 0; let rl = 0;
  
  for(let i = 0; i < arr.length; i++) {
    rl += arr[i][(arr.length - 1) - i];
    for(let j = 0; j < arr.length; j++) {
      if(i == j) lr += arr[i][j];
    }
  }

  return Math.abs(lr - rl);

}

console.log(diagonalDifference(arr));



