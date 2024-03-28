'use strict'

function mobius(n) {
  function isPrime(n) {
    if(n == 1) return false;
    else {
      for(let i = 2; i < n; i++) {
        if(n % i == 0) {
          return false;
        }
      }
      return true;
    }
  } 

  // 0
  for(let i = 2; i < n; i++) {
    if(n % i == 0) {
      if(Math.sqrt(i) == parseInt(Math.sqrt(i))) {
        if(isPrime(Math.sqrt(i))) return 0;
      }      
    } 
  }

  return -1;

}

module.exports = mobius;