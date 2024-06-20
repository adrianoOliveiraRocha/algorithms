'use strict'
// Falta só testar
const binaryArrayToNumber = arr => {
  let acum = 0, limit = arr.length-1;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == 1) {
      acum += Math.pow(2, (limit-i))
    }
  }
  return acum;
};

module.exports = binaryArrayToNumber