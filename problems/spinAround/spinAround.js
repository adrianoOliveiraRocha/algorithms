'use strict'

function spinAround(turns) {
  let r = 0, l = 0;
  for(let i = 0; i < turns.length; i++) {
    if(turns[i] == "right") {
      r+=90
    } else if(turns[i] == "left") {
      l-=90
    }
  }
  
  return Math.floor(Math.abs((Math.abs(r) - Math.abs(l)) / 360));
}

module.exports = spinAround;