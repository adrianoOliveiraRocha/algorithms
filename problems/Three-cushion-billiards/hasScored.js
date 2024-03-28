'use strict'

function hasScored(s) {
  
  if(s.length == 0) return false;

  if(!s.includes("W")) { // White
    if(!s.includes("Y") || !s.includes("R")) return false;
  } else if(!s.includes("Y")) { // Yellow
    if(!s.includes("W") || !s.includes("R")) return false;
  } else if(!s.includes("R")) { // Red
    if(!s.includes("Y") || !s.includes("W")) return false;
  }

  let cushion = 0, boll = 0, lastBoll = "x"

  for(let i = 0; i < s.length; i++) {
    if(s[i] == s[i].toUpperCase()) {
      if(s[i] != lastBoll) {
        boll++, lastBoll = s[i];
      }
      if(boll == 2) {
        if(cushion >= 3) {
          boll = 0; cushion = 0;
          return true
        } else {
          return false
        }
      }
    } else {
      cushion++
    }    
  }

  return true;

}

module.exports = hasScored;