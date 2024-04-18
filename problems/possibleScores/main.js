'use strict'

function possibleScores(answerOfTom, scoreOfTom, answerOfJohn) {
  
  if(answerOfTom == answerOfJohn) { //equals
    return [scoreOfTom, scoreOfTom]
  } else {
    let dif = 0, min, max;
    for(let i = 0; i < answerOfJohn.length; i++) {
      if(answerOfJohn[i] != answerOfTom[i]) {
        dif++;
      }
    }
    
    if(dif == 10) { //oposite
      return [100-scoreOfTom, 100-scoreOfTom];
    } else {
      min = scoreOfTom - (dif * 10);
      max = (dif * 10) + (100 - scoreOfTom);

      if(min < 0) min = min * (-1);
      if(max > 100) {
        max = 100 - (max - 100)
      } else if(max < min) {
        max = 2 * max;
      }
      return [min, max];
    }    
  }    
}

module.exports = possibleScores;