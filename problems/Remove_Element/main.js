'use strict'

var removeElement = function(nums, val) {
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] == val) delete nums[i];
  }
  return nums.sort((a, b)=> {a-b});
};

module.exports = removeElement;