'use strict'
// Success
class Solution{
  isSubset(a1, a2, n, m){
    for(let i = 0; i < m; i++) {
      if(a1.includes(a2[i])) {
        let index = a1.indexOf(a2[i]);
        delete a1[index];
      } else return "No";
    }
    return "Yes";
  }
}

module.exports = Solution;