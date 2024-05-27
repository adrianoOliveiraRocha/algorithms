'use strict'

function rotateMatrix(matrix) {
  let x = matrix[0].length
  let res = []
  let count = 0
  while(count < x) {
    let sub = []
    for(let i = 0; i < matrix.length; i++) {
      sub.push(matrix[i][count]);
    }
    res.push(sub);
    count++;
  }
  
  return res.reverse();
}

module.exports = rotateMatrix;