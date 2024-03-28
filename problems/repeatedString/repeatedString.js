'use strict'
// 3/23 test cases failed :( => 18 -> 11 -> 3

function repeatedString(s, n) {
  let sArr = s.split('').sort().reverse()
  let hmA = s.length - sArr.findIndex((el) => el == 'a');
  let completeString = parseInt(n / s.length);
  let res = completeString * hmA;
  if(n % s.length == 0) return res;
  else {
    let lettersMissing = n - completeString * s.length;
    let sfalt = s.slice(0, lettersMissing);
    for(let i = 0; i < sfalt.length; i++) {
      if(s[i] == 'a') res++;
    }
    return parseInt(res);
  }
}

const Test = {
  test1() {
    let s = 'abcac', n = 10;
    console.log(repeatedString(s, n), "\n"); //4
  },

  test2() {
    let s = 'aba', n = 10;
    console.log(repeatedString(s, n), "\n"); //7
  },

  test3() {
    let s = 'a', n = 1000000000000;
    console.log(repeatedString(s, n), "\n"); //1000000000000
  },

  test4() {
    let s = 'bab', n = 12;
    console.log(repeatedString(s, n), "\n"); //7
  },
}

// Test.test1();
// Test.test2();
// Test.test3();
Test.test4();