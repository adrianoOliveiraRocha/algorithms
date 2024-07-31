'use strict'

function countDifferentMatrices(matrices) {
  let diff = [matrices[0]]
  let e1 = matrices[0][0], e2 = matrices[0][1],
  e3 = matrices[0][2], e4 = matrices[0][3];
  let count = 1;
  while (count < matrices.length) {
    let same = true
    if(matrices[count].indexOf(e1) == 0) {
      if(matrices[count].toString() != [e1, e2, e3, e4].toString())
        same = false;
    } else if(matrices[count].indexOf(e1) == 1) {
      if(matrices[count].toString() != [e3, e1, e4, e2].toString())
        same = false;
    } else if(matrices[count].indexOf(e1) == 2) {
      if(matrices[count].toString() != [e2, e4, e1, e3].toString())
        same = false;
    } else if(matrices[count].indexOf(e1) == 3) {
      if(matrices[count].toString() != [e4, e3, e2, e1].toString())
        same = false;
    }
    if(!same) diff.push(matrices[count])
    count++
  }
  return diff.length
}

module.exports = countDifferentMatrices
