'use strict'
//ok. next
function relativelyPrime(n, arr) {
  let res = []
  for (let el of arr) {

    if(n == 1) {
      res.push(...arr)
      return res;
    }

    if(el == 1) {
      res.push(el)
      continue
    }

    if(n % el == 0 || el % n == 0) continue
    else {
      let hasCommunFactor = false
      for(let j = 2; j <= (el / 2); j++) {
        if(n % (el/j) == 0) {
          hasCommunFactor = true
          continue
        }
      }
      if(!hasCommunFactor) res.push(el)
    }
  }

  return res
}

module.exports = relativelyPrime
