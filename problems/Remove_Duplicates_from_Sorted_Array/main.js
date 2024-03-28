'use strict'
// next => https://leetcode.com/problems/remove-element/
var removeDuplicates = function(nums) {
  let current = nums[0], res = [nums[0]]; 
  for(let i = 1; i < nums.length; i++) {
    if(nums[i] != current) {
      res.push(nums[i]);      
    }
    current = nums[i];
  }
  return res;
};

module.exports = removeDuplicates;