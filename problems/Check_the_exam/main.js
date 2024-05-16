'use strict'

function checkExam(array1, array2) {
  let score = 0;
  for(let i = 0; i < array1.length; i++) {
    if(array2[i]) {
      if(array1[i] == array2[i]) score+=4;
      if(array1[i] != array2[i]) score-=1;
    }    
  }
  if(score < 0) return 0;
  else return score;
}

module.exports = checkExam;