'use strict'
/*
m = consecutive segments
d = sum of segments
*/
function birthday(s, d, m) {
  let howMuch = 0;
  for(let i = 0; i < s.length; i++) {
    let j = i, jumps = 0, sum = 0;
    while(jumps < m) {
      sum+=s[j]
      jumps++
      j++
    }
    if(sum == d) howMuch++;
  }
  return howMuch;
}

module.exports = birthday;