'use strict'

function diff(a, b){
  let count = () => {
    if(a.length >= b.length) return a.length;
    else return b.length;
  }
  let aStr = a.sort().join("");
  let bStr = b.sort().join("");
  // console.log()
  if(aStr == bStr) return [];
  else {
    console.log(aStr, bStr);
  }
}

export default diff;