'use strict'
//posted
function main(array) {
  let chunk = null, compare = null;
  let chunkInit = 0;
   
  for(let i = 1; i < array.length/2+1; i++) {
    chunk = array.slice(chunkInit, i);
    compare = array.slice(chunk.length, i+chunk.length);
    
    if(chunk.join('') == compare.join('')) {
      if (test(chunk, array.slice(i+chunk.length, array.length))) {
        return true;
      }
    }   
  }
  function test(chunk, arr) {
    let res = true;
    for(let i = 0; i < arr.length; i += chunk.length) {
      if(chunk.join('') != arr.slice(i, i+chunk.length).join('')) {
        res = false;
      }
    }
    return res;
  }
  return false;
}

module.exports = main;