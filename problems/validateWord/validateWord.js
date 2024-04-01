'use strict'

function validateWord(s) {
  let map = {};
  for(let i = 0; i < s.length; i++) {
    if(!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }  
  let values = Object.values(map);
  for(let i = 1; i < values.length; i++) {
    if(values[i] != values[i-1]) return false;
  }
  return true;
}

module.exports = validateWord;