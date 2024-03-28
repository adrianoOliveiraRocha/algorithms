'use strict'

function majorityElement(a, size) {
  if(size == 1) return a[0]

  let t = {};
  let candidates = []
  for(let i = 0; i < size; i++) {
    if(t[a[i]]) t[a[i]]++
    else t[a[i]] = 1 
    // it number is candidate?
    if(t[a[i]] > size/2) candidates.push(a[i]);
  } 
  
  let keys = Object.keys(t);  
  if(keys.length > 0 && candidates.length > 0) {
    let n = keys[0];
    keys.forEach(k => {
      if(t[k] > t[n]) n = k;
    })  
    return n;
  } else return -1;
  
}

module.exports = majorityElement;