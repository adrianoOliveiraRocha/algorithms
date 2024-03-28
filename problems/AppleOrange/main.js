'use strict'

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let x = 0, y = 0;

  for(let apple of apples) {
    if(a + apple >= s && a + apple <= t) {
      x++;
    }
  }

  for(let orange of oranges) {
    orange += b;
    if(orange >= s && orange <= t) {
      y++;
    }
  }

  console.log(x);
  console.log(y);
}

let s = 7, t = 11, a = 5, b = 15, 
apples = [-2, 2, 1], oranges = [5, -6];
countApplesAndOranges(s, t, a, b, apples, oranges);