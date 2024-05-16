'use strict'
// ok
function convertHashToArray(hash){
  let r = [];  
  let keys = Object.keys(hash);
  for(let i = 0; i < keys.length; i++) {
    r.push([keys[i], hash[keys[i]]]);
  }
  return r;
}

module.exports = convertHashToArray;