'use strict'

function diff(a, b){
  let aStr = a.sort().join("");
  let bStr = b.sort().join("");  
  let d = [];
  if(aStr == bStr) return d;
  else {
    let size = aStr.length >= bStr.length ? a.length : b.length;    
    for(let i = 0; i < size; i++) {
      if(aStr[i] && !b.includes(aStr[i])) {
        if(!d.includes(aStr[i])) d.push(aStr[i]);
      }
      if(bStr[i] && !a.includes(bStr[i])) {
        if(!d.includes(bStr[i])) d.push(bStr[i]);
      }      
    }
  }
  return d.sort();
}

export default diff;