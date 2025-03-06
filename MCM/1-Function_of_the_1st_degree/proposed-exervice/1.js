'use strict'
/*
Determine the value, in each case, of K belongs to |R in order to the function 
be a first degre function
*/

let kArr = [];
for(let i = -100; i <= 100; i++) {
  kArr.push(i);
}

function a(kArr) {
  // f(x) = (3k + 6)x + 1; a = (3K + 6); (3k + 6) != 0 
  let res = [];
  for(let k of kArr) {
    if(3 * k + 6 === 0) {
      res.push(k);
    }
  }
  console.log(`a) k cannot be ${res}`);
}

function b(kArr) {
  // f(x) = (2k - 8)x + 7; a = (2k - 8); (2k - 8) != 0 
  let res = [];
  for(let k of kArr) {
    if((2 * k - 8) === 0) {
      res.push(k)
    }
  }
  console.log(`b) k cannot be ${res}`);
}

function c(kArr) {
  // y = (k**2 - 25)x - 2; a = (k**2 - 25) != 0
  let res = [];
  for(let k of kArr) {
    if((Math.pow(k, 2) - 25) === 0) {
      res.push(k);
    }
  }
  console.log(`c) k cannot be ${res}`);
}

function d(kArr) {
  // y = (k**2 - 9)x**2 + 2x - 1
  let res = [];
  for(let k of kArr) {
    if(Math.pow(k, 2) - 9 === 0) {
      res.push(k);
    }
  }
  console.log(`d) k cannot be ${res}`);
}

function e(kArr) {
  // e) f(x) = - kx + Math.sqrt(2); a = -k != 0
  let res = [];
  for(let k of kArr) {
    if(k === 0) {
      res.push(k);
    }
  }
  console.log(`e) k cannot be ${res}`);
}

a(kArr);
b(kArr);
c(kArr);
d(kArr);
e(kArr);
