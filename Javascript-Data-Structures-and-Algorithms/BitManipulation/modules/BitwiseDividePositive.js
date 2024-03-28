'use strict'
const BitwiseSubtract = require('./BitwiseSubtract');

function BitwiseDividePositive(a, b) {
  let c = 0;

  if(b != 0) {
    while(a >= b) {
      a = BitwiseSubtract(a, b);
      c ++;
    }
  }  
  return c;
}

console.log(BitwiseDividePositive(10, 2));