'use strict'

function alphanumeric(string){
  let c = 0
  if(string.length == 0) return false
  if(string.match(/[_]/)) return false
  if(string.match(/[ ]/)) return false
  if(string.match(/[1-9]/)) c++
  if(!string.match(/[A-z]/)) c++
  if(!string.match(/[À-ÿ]/)) c++

  return c > 0
}

module.exports = alphanumeric
