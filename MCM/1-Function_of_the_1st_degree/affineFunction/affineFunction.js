'use strict'
/*
a and b are real numbers
a != 0
*/
function affineFunction(x, k, b) {
  let a = 2 * k - 8;
  let result = {value: a * x + b}
  if(a != 0) result.isItAffine = true;
  else {
    result.isItAffine = false;
    result.k = k;
  }  
  return result;
}

// f(x) = (2k - 8)x + 7
for(let k = -10; k < 10; k++) {
  console.log(affineFunction(4, k, 7))
}
