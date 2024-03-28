'use strict'

function isPalindrome(x) {
  let original = x;
  let alg = [];
  if(x === 0) return true;
  while(x > 0) {
    let res;
    res = x % 10;
    alg.push(res);
    x = parseInt(x / 10);
  }
  let oposit = parseInt(alg.join(''));
  return original === oposit;
}

console.log(isPalindrome(452));
console.log(isPalindrome(121));