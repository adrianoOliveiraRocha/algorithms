'use strict'
// Success
function trigrams( phrase ) {
  if(phrase.length < 3) return ''
  let phr = phrase.replaceAll(" ", "_")
  let res = ""
  let w = ""
  let x = 0
  while(x < phr.length) {
    for(let i = x; i < phr.length; i++) {
      w += phr[i]
      if(w.length == 3) {
        if(i < phr.length - 1) {
          res += w + " "
          w = ""
          x++
          break
        } else {
          res += w
          return res
        }        
      }
    }
  }
}

module.exports = trigrams;