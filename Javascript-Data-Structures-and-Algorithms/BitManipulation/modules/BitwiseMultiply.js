'use strict'

const BitwiseAdd = require("./modules/BitwiseAdd");
const BitwiseNegate = require("./modules/BitwiseNegate");

function BitwiseMultiply(a, b) {
  let m = 1, c = 0;

  if(a < 0) {
    a = BitwiseNegate(a);
    b = BitwiseNegate(b);
  }

  while((a >= m) && (b > 0)) {
    // 5, 10, 20
    if(a & m) {
      c = BitwiseAdd(b, c);
    }
    b = b << 1;
    m = m << 1; 
  }

  return c;
  
}

module.exports = BitwiseMultiply;

/*
Resolution

BitwiseMultiply(4, 5)
a = 100 (4); b = 101 (5); m = 1, c = 0;

if(a < 0) F

while((a >= m) && b > 0) V 
         V          V
  if(a & m) F
  b = b << 1 => b = 10
  m = m << 1 => m = 2

a = 100 (4); b = 1010 (10); m = 010 (2), c = 0;
while((a >= m) && b > 0) V
         V          V
  if(a & m) F
  b = b << 1 => 10100 (20)
  m = m << 1 => 0100 (4)

a = 100 (4); b = 10100 (20); m = 0100 (4), c = 0;
while((a >= m) && (b > 0)) V
  if(a & m) V
    c = BitwiseAdd(b, c);
    c = 10100 (20)
  b = b << 1 => 101000 (40)
  m = m << 1 => 01000 (8)

a = 100 (4); b = 101000 (40); m = 01000 (8), c = 10100 (20);
while((a >= m) && (b > 0)) F
return c = 10100 (20)
*/
