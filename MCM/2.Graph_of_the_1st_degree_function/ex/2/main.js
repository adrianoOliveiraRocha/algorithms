'use strict'

class Solution {
  constructor(p1, p2) {
    /* b = y - ax; a = (y - b)/x; a = 1; b = 1*/
    // elimine a variable
    let a = 1, b = 1;
    // Do elimine the a variable to discover b
    let multiplicationFactor = p2[0] / p1[0];
    if(p2[0] > 0) multiplicationFactor *= -1;
    console.log(multiplicationFactor * p1[0]);
    p1[0] = p1[0] * multiplicationFactor;
    p1[1] = p1[1] * multiplicationFactor;
    console.log(p1, p2);
    let bDenominator = p1[1] + p2[1];
    let bDividend = b * multiplicationFactor + a;
    console.log(bDenominator, bDividend);    
    b = (bDenominator / bDividend).toFixed(1);
    console.log(b);
    /*next => How discover the a value
    tip => The inverse process to eliminate the b variable
    */
    
     
  }
}


module.exports = Solution;