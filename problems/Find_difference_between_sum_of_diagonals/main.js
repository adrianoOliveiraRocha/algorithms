'use strict'

function diagonalSumDifference(grid, n) {
  let j = n, a = 0, b = 0;
  for(let i = 0; i < n; i++) {
    a += grid[i][i];
    b += grid[i][--j];
    ;
  }
  return Math.abs(a - b);
}

module.exports = diagonalSumDifference;