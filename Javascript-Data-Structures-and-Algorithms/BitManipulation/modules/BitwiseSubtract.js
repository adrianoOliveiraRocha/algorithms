'use strict'

const BitwiseAdd = require('./BitwiseAdd');
const BitwiseNegate = require('./BitwiseNegate');

function BitwiseSubtract(a, b) {
  return BitwiseAdd(a, BitwiseNegate(b));
}

module.exports = BitwiseSubtract;