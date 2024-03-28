'use strict'

class Solution {
  constructor() {
    this.test3();
  }

  test1() {
    let A = [1, 2, 4, 5, 7];
    let B = [5, 6, 3, 4, 8]; 
    let X = 9; 
    console.log("A: ", A);
    console.log("B: ", B);
    console.log("X:", X);
    console.log(this.allPairs(A, B, A.length, B.length, X));
  }

  test2() {
    let A = [-1, -2, 4, -6, 5, 7];
    let B = [6, 3, 4, 0]; 
    let X = 8; 
    console.log("A: ", A);
    console.log("B: ", B);
    console.log("X:", X);
    console.log(this.allPairs(A, B, A.length, B.length, X));
  }

  test3() {
    let strA = "-113 147 65 37 6 -27 -73 109 31 -8 -102 -74 -183 -186 131 40 150 -123 -111 -91 176 170 -4 -165 -49 93 -68 142 171 98 -60 -196 99 69 138 -20 -143 -63 129 -158 -103 -30 73 32 151 136 82 -150 -31 -37 -164 101 -69 -62 -100 -14 111 -97 119 -137 68 -130 -127 -161 124";
    let A = [];
    strA.split(" ").forEach(el => {
      A.push(parseInt(el));
    });
    let strB = "-122 102 -67 152 -169 48 -52 -134 33 -91 188 6 -148 -109 -35 64 32 75 198 22 65 -168 185 -66 -127 -147 145 -29 104 51 93 71 129 39 76 10 70";
    let B = [];
    strB.split(" ").forEach(el => {
      B.push(parseInt(el));
    });

    let X = 2;
    console.log(this.allPairs(A, B, A.length, B.length, X));

  }
  // Success
  allPairs(A, B, N, M, X) {
    A.sort((a, b) => a-b);
    let pairs = [];
    for(let i = 0; i < N; i++) {
      let complement = X - A[i]; 
      if(B.includes(complement)) {
        pairs.push([A[i], complement]);
      }
    }
    return pairs;
  }
}

new Solution();