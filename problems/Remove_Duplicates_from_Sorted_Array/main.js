'use strict'
// next => https://leetcode.com/problems/remove-element/
var removeDuplicates = function(nums) {
  let newSet = new Set([...nums]);
  let res = Array.from(newSet);
  return res;
};

module.exports = removeDuplicates;