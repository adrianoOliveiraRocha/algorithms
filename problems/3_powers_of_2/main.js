'use strict'
/*
1 - numa divisão por 3 o resto pode ser 1 ou 2
2 - se o resultado de n / 3 for uma potência de 2, soma os dois 
primeiros números e coloca o resto na segunda posição
*/
function threePowers(n) {
  if(n < 3) return false;
  n = parseInt(n)
  let r = n % 3
  let v = parseInt(n/3)
    
  if(testpw(v)) {
    return true;
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
