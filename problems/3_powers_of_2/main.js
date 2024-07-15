'use strict'

function threePowers(n) {
  let r = n % 3
  let v = new Array(3).fill(parseInt(n/3))
   
  while(r > 0) {
    for(let i = 0; i < v.length; i++) {
      v[i] += 1;
      r -= 1;
      if(r == 0) break;
    }
  }
  
  let testR = true
  for(let i = 0; i < v.length; i++) {
    if(!testpw(v[i])) {
      testR = false
      break;
    }
  }  
  
  return [v, testR]
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
