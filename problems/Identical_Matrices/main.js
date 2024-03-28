'use strict'

/**
 * @param {number} n
 * @param {number[]} grid1
 * @param {number[]} grid2
 * @returns {number}
*/

function areMatricesIdentical(n,grid1, grid2) {
  for(let i = 0; i < n; i++) {
    if(grid1[i].join('') != grid2[i].join('')) {
      return 0;
    }
  }
  return 1;
}

module.exports = areMatricesIdentical;