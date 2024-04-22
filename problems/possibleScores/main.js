'use strict'


function possibleScores(answerOfTom,scoreOfTom,answerOfJohn){
    //coding and coding..
    let diff = 0;
    let min;
    let max;
    for (let i = 0; i < 10; i++) {
      if (answerOfJohn[i] !== answerOfTom[i]) {
        diff += 10;
      }
    }
    
    diff - scoreOfTom >= 0 ? min = diff - scoreOfTom : min = scoreOfTom - diff;
    diff + scoreOfTom <= 100 ? max = diff + scoreOfTom : max = 100 - (diff + scoreOfTom - 100);
    return [min, max];
}

/*
function possibleScores(aTom, sTom, aJohn) {

  let same = 0;
  
  for (let i = 0; i < aTom.length; i++)
    if (aTom[i] === aJohn[i])
      same += 10;
  console.log(`same: ${same}`);
  const a = 100 - Math.abs(sTom - same);
  const b = Math.abs(100 - sTom - same);
  console.log(a, b);
  return a > b ? [ b, a ] : [ a, b ];

}
*/


module.exports = possibleScores;