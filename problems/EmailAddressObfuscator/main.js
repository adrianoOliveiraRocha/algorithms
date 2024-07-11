'use strict'

const obfuscate = function(email) {
  if(email.indexOf('@') == -1) return email;
  
  let result = "";
  let a = email.slice(0, email.indexOf("@"))
  let b = email.slice(email.indexOf("@") + 1)
  result = a + " [at] " + b;
  while(result.includes('.')) {
    dot(result)
  }
  function dot(str) {
    let c = str.slice(0, str.indexOf("."))
    let d = str.slice(str.indexOf(".") + 1)
    result = c + " [dot] " + d;
  } 
  
  return result
  
}

module.exports = obfuscate;
