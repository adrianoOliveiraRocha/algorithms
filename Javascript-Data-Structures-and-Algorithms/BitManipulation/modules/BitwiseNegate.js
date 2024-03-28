'use strict'
const BitwiseAdd = require('./BitwiseAdd');

function BitwiseNegate(a) {
  return BitwiseAdd(~a, 1);  
}

module.exports = BitwiseNegate;