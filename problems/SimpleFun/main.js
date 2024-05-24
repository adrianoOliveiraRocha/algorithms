'use strict'

function repeatSequenceLen(a0) {
  let sequence = []; 
  let ss = 0;

  const sumSquare = (n) => {
    let nArr = n.toString().split("");
    let r = 0;
    for(let i = 0; i < nArr.length; i++) {
      r += Math.pow(parseInt(nArr[i]), 2)
    }
    return r
  }

  while(true) {
    ss = sumSquare(a0)
    if(sequence.includes(ss)) {
      let rs = sequence.slice(sequence.indexOf(ss)); 
      return rs.length;           
    } else {
      sequence.push(ss)
      a0 = ss;
    }
  }
  
   
}

module.exports = repeatSequenceLen