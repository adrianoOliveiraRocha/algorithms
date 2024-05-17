'use strict'

function sortGiftCode(code){
  return code.split("").sort().join().replaceAll(",", "");
}

module.exports = sortGiftCode;