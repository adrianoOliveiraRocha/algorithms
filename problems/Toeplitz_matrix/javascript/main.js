'use strict'
// N = lines; M = Columns

/*

for(int i=0; i<N-1; i++) {
    for(int j=0; j<M-1; j++) {
      if(mat[i][j] != mat[i+1][j+1]) {
        return false;
      }
    }
}
return true;

*/

class Solution {
  isToepliz(A, N, M) {
    for(let i = 0; i < N-1; i++) {
      for(let j = 0; j < M-1; j++) {
        if(A[i][j] != A[i+1][j+1]) {
          return false;
        }
      }
    }
    return true;
  }

  centralDiagonalIsEqual(A, N, M) {
    if(N != M) return false;
    let f = N + 1;
    let i = 0;
    let m = 1;
    while(i <= A.length) {
      i = m * f;
      if(A[i] == A[0]) {
        m++;
        i = m * f;
      } else {
        return false;
      }
    }
    return true;
  }
}

module.exports = Solution