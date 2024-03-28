'use strict'

const getMinimumDifference = function(root) {
  root = Array.from(root).sort((a, b) => {
    if(a != null && b != null) {
      return a - b
    }
  });
  let min = root[1] - root[0];
  for(let i = 1; i < root.length; i++) {
    if(root[i+1] && root[i]) {
      let t = root[i+1] - root[i];
      if(min > t) min = t;
    }    
  }
  return min;
};

module.exports = getMinimumDifference;