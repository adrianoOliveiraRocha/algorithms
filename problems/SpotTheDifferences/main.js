'use strict'

function spot(s1, s2){
  let res = []
  for (var i = 0; i < s1.length; i++) {
    if(s1[i] != s2[i]) res.push(i)
  }
  return res
}

module.exports = spot
