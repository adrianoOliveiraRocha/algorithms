'use strict'

const obfuscate = function(email) {
  let result = "";
  if(email.indexOf('@') == -1) {
    dot(email)
  } else {
    let a = email.slice(0, email.indexOf("@"))
    let b = email.slice(email.indexOf("@") + 1)
    result = a + " [at] " + b;
    while(result.includes('.')) {
      dot(result)
    }
    return result  
  } 
  
  function dot(str) {
    let c = str.slice(0, str.indexOf("."))
    let d = str.slice(str.indexOf(".") + 1)
    result = c + " [dot] " + d;
  } 
   
  
  
}

module.exports = obfuscate;
