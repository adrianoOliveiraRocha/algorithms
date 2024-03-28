'use strict'

function twoSum(nums, target) {
	let res = [];
	for(let i = 0; i < nums.length; i++) {
		let num = nums[i]; 
		delete nums[i];
		let complement = target - num;
		if(num + complement === target && nums.indexOf(complement) > 0) {
			res.push(i); res.push(nums.indexOf(complement));
		}
	}
	return res;
}

console.log(twoSum([2, 7, 11, 15], 9)); 
console.log(twoSum([3, 2, 4], 6)); 
console.log(twoSum([3, 3], 6)); 
