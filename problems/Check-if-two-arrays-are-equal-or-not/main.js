'use strict'

function check1(A, B, N){
  for(let i = 0; i < N; i++) {
    if(!(B.includes(A[i]))) return 0;
  }
  return 1;
}

function check2(A, B, N) {
  for(let i = 0; i < N; i++) {
    let j = 0;
    let resJ = false;
    while(j < N) {
      if(A[i] == B[j]) {
        resJ = true;
        break;
      }
      j++
    }
    if(resJ == false) return 0;
  }
  return 1;
}

function check3(A, B, N) {
  let a = A.sort(); let b = B.sort();
  for(let i = 0; i < N; i++) {
    if(a[i] != b[i]) return 0;
  }
  return 1;
}

module.exports = {check1, check2, check3};

