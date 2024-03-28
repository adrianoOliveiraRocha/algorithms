'use strict'
// Success
function PalinArray(arr, n) {
  for(let el of arr) {
    let reverse = el.toString().split("").reverse();
    if(el != parseInt(reverse.join(""))) return false;
  }
  return true;
}

module.exports = PalinArray;