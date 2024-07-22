'use strict'

function swap(arr, i1, i2) {
  let t = arr[i1]
  arr[i1] = arr[i2]
  arr[i2] = t;
  return arr;
}

module.exports = swap;