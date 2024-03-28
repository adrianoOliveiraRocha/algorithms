'use strict'
// from binary to decimal -> https://pt.wikihow.com/Converter-N%C3%BAmeros-Bin%C3%A1rios-em-Decimais
function BitwiseAdd(a, b) {
  while(b != 0) {
    let carry = (a & b); // AND
    a = a ^ b; // XOR
    b = carry << 1;
  }
  return a;
}

module.exports = BitwiseAdd;