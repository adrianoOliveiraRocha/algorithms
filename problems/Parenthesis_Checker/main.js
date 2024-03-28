'use strict'

function ispar0(x) {
  
  if(x.length % 2 !== 0){
    return false;
  }

  // your code here
  const r = [];
  for(let i = 0; i < x.length; i++) {
    const c = x[i];    
    switch(c) {
      case "(": 
        r.push(")");
        break;
      
      case "[": 
        r.push("]");
        break;      
      
      case "{": 
        r.push("}");
        break;

      default: 
        if(c !== r.pop()) {
          return false;
        }    
        break;             
    } 
    
  } 

  return r.length === 0;

}

module.exports = ispar0;