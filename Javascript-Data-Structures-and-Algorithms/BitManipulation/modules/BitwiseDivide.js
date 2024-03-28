'use static'

const BitwiseNegate = require("./BitwiseNegate");
const BitwiseSubtract = require("./BitwiseSubtract");

function BitwiseDivide(a, b) {

  let c = 0, isNegative = 0;

  if(a < 0) {
    a = BitwiseNegate(a);
    isNegative = !isNegative;
  }

  if(b < 0) {
    b = BitwiseNegate(b);
    isNegative = !isNegative;
  }

  if(b != 0) {
    while(a >= b) {
      a = BitwiseSubtract(a, b);
      c++;
    }
  }

  if(isNegative) {
    c = BitwiseNegate(c);
  }

  return c;

}

console.log(BitwiseDivide(10, 2));
console.log(BitwiseDivide(-10, 2));
