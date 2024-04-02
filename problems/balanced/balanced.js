'use strict'

function balanced(centrifuge) {
  console.log(centrifuge, "\n")
  let chunk = null, compare = null;
  for(let i = 1; i < centrifuge.length/2+1; i++) {
    chunk = centrifuge.slice(0, i);
    compare = centrifuge.slice(i, i+chunk.length);
    // console.log("chunk: ", chunk, "i: ", i);
    console.log("chunk: ", chunk, "compare: ", compare);
  }
  return false;
}

module.exports = balanced;