'use strict'

function gimmeTheLetters(sp) {
  let res = "";
  for(let i = sp.charCodeAt(0); i <= sp.charCodeAt(2); i++) {
    res+=String.fromCharCode(i);
  }
  return res;
}

module.exports = gimmeTheLetters;