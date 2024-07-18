'use strict'

/*
Caso 9
Depois da divisão eu tenho 3 3 3. Mas se n for 3 é true 
*/

function threePowers(n) {
  if(n < 3) return false
  n = parseInt(n)
  let r = n % 3
  let v = parseInt(n/3)
    
  if(testpw(v)) {
    return true
  } else {
    return false
  }  
}

function testpw(v) {
  let x = v;
  while(x > 2) {
    if(x % 2 != 0) return false;
    x = x/2;
  }
  return true
}

module.exports = threePowers;
