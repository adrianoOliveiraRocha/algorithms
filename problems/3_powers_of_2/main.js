'use strict'

function threePowers(n) {
  /*
  test if a number in power of two
  1. Do division; 
  2. If has rest, no;
  3. If the rest is more than zero, take the divisor power result.
    If the response is the number, yes.
  */
  return isPowerOfTwo(n)
  function isPowerOfTwo(v) {
    let x = v;
    while(x > 2) {
      if(x % 2 != 0) return false;
      x = x/2;
    }
    return true
  }
}

module.exports = threePowers;
