'use strict'

function appleBoxes(k) {
  let nYellow = 0, nRed = 0
  for(let i = 1; i <= k; i++) {
    if(i % 2 == 0) { // even => red
      nRed += (i * i)
    } else { // odd => yellow
      nYellow += (i * i)
    }
  }
  return nRed - nYellow
}

module.exports = appleBoxes;