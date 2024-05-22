'use strict'
/*
Keep the sumSquares in an array. When apper a repetition, count the size 
of the array from repeated number to the last number without count with 
repetition
*/
function repeatSequenceLen(a0) {
  let sequence = [];
  let nArr = a0.toString().split("");
  let sumSquare = ((nArr) => {
    let r = 0;
    for(let i = 0; i < nArr.length; i++) {
      let x = Math.pow(parseInt(nArr[i]), 2)
      r += x
    }
    return r
  })(nArr)
  
  if(!sequence.includes(sumSquare)) {
    sequence.push(sumSquare)
    console.log(sequence)
    repeatSequenceLen(sumSquare)
  }
  else {
    return sequence;
  }  
}

module.exports = repeatSequenceLen