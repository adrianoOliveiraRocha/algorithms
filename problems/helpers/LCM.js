'use strict'

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

module.exports = LCM;