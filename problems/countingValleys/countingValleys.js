'use strict'
/*
U: uphill
D: downhill

* A mountain is a sequence of consecutive steps above sea level, 
  starting with a step up from sea level and ending with a step down to sea level.
* A valley is a sequence of consecutive steps below sea level, starting with a step 
  down from sea level and ending with a step up to sea level.

*/

function countingValleys(steps, path) {
  let count = 0, seaDown = false, valley = 0;
  for(let i = 0; i < steps; i++) {
    if(path[i] == 'U') {
      count++;
      if(count == 0 && seaDown == true) {
        valley++;
        seaDown = false;
      }
    } else if(path[i] == 'D') {
      count--;
      if(count < 0) seaDown = true;
    }
    
    
  }
  return valley;
}

const Test = {
  test1() {
    let steps = 8, path = 'UDDDUDUU';
    console.log(countingValleys(steps, path)); // 1
  }
}

Test.test1();