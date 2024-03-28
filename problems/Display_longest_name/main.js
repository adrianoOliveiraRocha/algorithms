'use strict'
//Success
class Solution {
  longest(names, n){
    let l = names[0]
    for(let i = 0; i < n; i++) {
      if(names[i].length > l.length) l = names[i] 
    }
    return l;
  }
}

module.exports = Solution