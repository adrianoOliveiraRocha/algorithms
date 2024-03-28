'use strict'

function LCSNaive(str1, str2, str1Length, str2Length) {
  if(str1Length == 0 || str2Length == 0) {
    return 0;
  }

  if(str1[str1Length - 1] == str2[str2Length - 1]) {
    return 1 + LCSNaive(str1, str2, str1Length - 1, str2Length - 1);
  } else {
    return Math.max(
      LCSNaive(str1, str2, str1Length, str2Length - 1),
      LCSNaive(str1, str2, str1Length - 1, str2Length)
    );
  }
}

function LCSNaiveWrapper(str1, str2) {
  return LCSNaive(str1, str2, str1.length, str2.length);
}

let res = LCSNaiveWrapper('AGGTAB', 'GXTXAYB');
console.log(res);