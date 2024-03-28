'use strict'

var longestCommonPrefix = function(strs) {
  let size = strs.length;
  if (size == 0) return "";

  if (size == 1) return a[0];
  
  strs.sort();
  let end = Math.min(strs[0].length, strs[size-1].length);
  let i = 0;
  while (i < end && strs[0][i] == strs[size-1][i]) {
    i++;
  }    

  let pre = strs[0].slice(0, i);
  return pre;
};

var longestCommonPrefixTest1 = function(strs) {

  if(strs.length == 0) return "";
  if(strs.length == 1) return strs[0];

  let pre = "", ampl = 1;
  while(true) {
    let testPre = strs[0].slice(0, ampl);
    if(testPre.length == 0) break;
    let itIsOk = true;
    for(let i = 0; i < strs.length; i++) {
      if(strs[i].slice(0, ampl) != testPre) {
        itIsOk = false;
        break;
      }
    }
    if(itIsOk) pre = testPre;
    else break;
    ampl++;
  };  
  return pre;  
};

module.exports = longestCommonPrefix;