'use strict'

function descendingOrder(n) {
  return parseInt(n.toString().split('').sort((a, b) => b - a).join(''));
}

console.log(descendingOrder(12345))