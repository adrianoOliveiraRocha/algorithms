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
  console.log(n, v)
  if(testpw(v)) {
    return true
  } else {
    let max = n - 2
     
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

//console.log(testpw(5))

module.exports = threePowers;
