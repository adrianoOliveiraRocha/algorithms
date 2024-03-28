'use strict'

const Main  = {
  test(values) {
    let c = 0;
    for(let i = values[c]; i < values.length; i++) {
      for(let j = values[c+1]; j < values.length; j++) {
        if(Math.abs(values[i] * values[j]) % 2 == 0) {
          return false;
        }
      }
    }
    return true;
  }
}

module.exports = Main;