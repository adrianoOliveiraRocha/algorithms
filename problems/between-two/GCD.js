'use strict'

function GCD(a, b) {
  while(b != 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return a;

}

module.exports = GCD;