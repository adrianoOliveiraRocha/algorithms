'use strict'

function isBinary(str) {
  const pattern = /^[01]+$/;
  return pattern.test(str);
}

module.exports = isBinary;