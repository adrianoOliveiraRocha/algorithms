'use strict'

function ispar0(parenStr) {
  
  if(parenStr.length % 2 !== 0){
    return false;
  }
  
  const r = [];
  for(let i = 0; i < parenStr.length; i++) {
    const c = parenStr[i];    
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