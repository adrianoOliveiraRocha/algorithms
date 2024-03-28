'use strict'
const mobius = require('./main');

const Tests = {
  test1() {
    /* 0 if n is divisible by the square of any prime number. 
    For example n = 4, 8, 9 are all divisible by the square of at 
    least one prime number. */
    console.log(mobius(4))
    console.log(mobius(8))
    console.log(mobius(9))
  }, 
  
  test2() {
    /* 1 if n is not divisible by the square of any prime numbers, 
    and has an even number of prime factors. For example n = 6, 10, 
    21 satisfy these conditions (e.g. 21 = 3 * 7 so it has an even 
      number (2) of distinct prime factors and is not divisible by 
      the square of any prime numbers). */
    console.log(mobius(6))
    console.log(mobius(10))
    console.log(mobius(11))
  }
}

Tests.test1();
Tests.test2();
