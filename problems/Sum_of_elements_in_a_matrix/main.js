'use strict'

function sumOfMatrix(N ,M, Grid){
  let sum = 0;
  for(let i = 0; i < N; i++) {
    sum += Grid[i].reduce((ac, val) => {
      return ac + val
    }, 0);  
  }
  return sum;
}

module.exports = sumOfMatrix;