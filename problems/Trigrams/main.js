'use strict'

function trigrams( phrase ) {
  let phr = phrase.replaceAll(" ", "_")
  let res = ""
  let w = ""
  let x = 1
  while(x < phr.length) {
    for(let i = x; i < phr.length; i++) {
      w += phr[i]
      if(w.length == 3) {
        res += w + " "
        w = ""
        x++
        break
      }
    }
  }
  return res;
}

module.exports = trigrams;