'use strict'

function allNines(x) {
  if(x % 2 == 0) return -1;
  let f = 10;
  while(true) {
    let test = (f-1) / x;
    if(Number.isInteger(test)) return BigInt(test);
    else f *= 10;
  }
}

module.exports = allNines;