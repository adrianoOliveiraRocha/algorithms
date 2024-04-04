'use strict'

function balanced(centrifuge) {
  console.log(centrifuge, "\n")
  let chunk = null, compare = null;
  let chunkInit = 0, compareInit = 1;
  let res = false; 
  for(let i = 1; i < centrifuge.length/2+1; i++) {
    chunk = centrifuge.slice(chunkInit, i);
    compare = centrifuge.slice(chunk.length, i+chunk.length);
    
    if(chunk.join('') == compare.join('')) {
      console.log('equals', chunk, compare, 'i+chunk.length: ', i+chunk.length);
      test(chunk, centrifuge.slice(i+chunk.length, centrifuge.length));
    } else {
      console.log("difrrent: ", chunk, compare);      
    }    
  }
  function test(chunk, arr) {
    console.log("Test chunk with the rest of the array");
    console.log(chunk, arr);
    return;
  }
  return res;
}

module.exports = balanced;