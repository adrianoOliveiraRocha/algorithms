'use strict'

function cookingTime(neededPower, minutes, seconds, power) {
  let p1 = parseInt(neededPower.replace(/\D/g, ""));
  let p2 = parseInt(power.replace(/\D/g, ""));
  let totalSeconds = (minutes * 60) + seconds;
  let ts = (p1 * totalSeconds) / p2;
  let m = parseInt(ts/60), s = Math.ceil(ts % 60);
  let res;
  if(s < 60) res = `${m} minutes ${s} seconds`;
  else if(s == 60) res = `${m + 1} minutes 0 seconds`; 
  return res; 
}

const Tests = {
  test1() {
    console.log(cookingTime("600W", 4, 20, "800W")); // 3 minutes 15 seconds
  },

  test2() {
    /*
    Error: expected '54 minutes 60 seconds' to equal '55 minutes 0 seconds'
    */
    console.log(cookingTime("21W", 64, 88, "25W")); // 55 minutes 0 seconds
  }
}

Tests.test2();