'use strict'
// Accepted
function minOperations(nums, k) {
  nums = nums.sort((a, b) => a - b);
  let steps = 0;
  while(nums.find((el => el < k))) {
    let [x, y] = nums.splice(0, 2);
    // let newValue = Math.min(x, y) * 2 + Math.max(x, y);
    nums.push(Math.min(x, y) * 2 + Math.max(x, y));
    nums = nums.sort((a, b) => a - b);
    steps++;
  } 

  return steps;
};

module.exports = minOperations;