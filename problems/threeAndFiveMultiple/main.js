'use strict'

function threeAndFiveMultiple() {
  let s = 0;
  for(let i = 1; i < 1000; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      s += i;
    };
  }
  return s;
}

console.log(foo());
