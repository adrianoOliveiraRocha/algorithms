'use strict'
// success
function breakingRecords(scores) {
  let min = 0, max = 0, breakMin = 0, breakMax = 0;
  for (let i = 0; i < scores.length; i++) {
    if(i == 0) {
      min = scores[i];
      max = scores[i];
    } else {
      if(scores[i] < min) {
        min = scores[i], breakMin++
      }
      if(scores[i] > max) {
        max = scores[i], breakMax++
      }
    }
  }
  return [breakMax, breakMin]
}

module.exports = breakingRecords;