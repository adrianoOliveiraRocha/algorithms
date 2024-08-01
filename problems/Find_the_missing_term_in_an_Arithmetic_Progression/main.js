'use strict'

const findMissing = function (list) {
  let x = Math.min(list[1] - list[0], list[2] - list[1])
  for(let i = 1; i < list.length; i++) {
    if(list[i] - list[i-1] != x) {
      return list[i] - x
    }
  }
}

module.exports = findMissing
