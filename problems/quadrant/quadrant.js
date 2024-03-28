'use strict'

// You have passed all of the tests! :)

const Test = {
  test1() {
    console.log(quadrant(1, 2)); // 1 
  }
}

function quadrant(x, y) {
  if(x > 0 && y > 0) return 1;
  if(x < 0 && y > 0) return 2;
  if(x < 0 && y < 0) return 3;
  if(x > 0 && y < 0) return 4;
}