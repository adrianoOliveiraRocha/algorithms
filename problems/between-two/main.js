'use strict'

function getTotalX(a, b) {
  let size = a.length;
  let ns = [];
  let min = Math.min(...a);
  let max = Math.max(...b);
  let hm = {}

  for(let i = min; i <= max; i++) {
    for(let j = 0; j < size; j++) {
      if(i % a[j] == 0 && b[j] % i == 0) {
        if(hm[i]) hm[i]++;
        else hm[i] = 1;
        if(hm[i] == a.length) ns.push(i);
      }
    }
  }

  return ns.length;

}

/*
function getTotalX(a, b) {
  let result = 0;

  function GCD(a, b) {
    while(b != 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }  
    return a;  
  }

  function LCM(a, b) {
    let min = (a > b) ? a : b;
    let lcm;
    while(true) {
      if(min % a == 0 && min % b == 0) {
        lcm = min;
        break;
      }
      min++;
    }
    return lcm;
  }

  let lcm = LCM(...a);
  let gcd = GCD(...b);

  let multiple = 0;
  while(multiple <= gcd) {
    multiple += lcm;
    if(gcd % multiple == 0) result++;
  }

  return result;

}
*/

module.exports = getTotalX;
