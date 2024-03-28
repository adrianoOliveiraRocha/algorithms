'use strict'

function minSwaps(nums) {
  let swap = 0;
	for(let i = 0; i < nums.length; i++) {
	  let sArr = nums.slice(i, nums.length);
	  let min = Math.min(...sArr);
		if(nums[i] != min) {
	    let indexMin = nums.indexOf(min);
	    nums[indexMin] = nums[i];
	    nums[i] = min;
	    swap++;
	  }
	}	
	return swap;
}


/*
function minSwaps(nums) {
  let hm = 0;
	while(nums.length > 0) {
	  let original = [...nums], hm = 0;
    nums.sort((a, b) => a-b);
    console.log(original, nums);
  	for(let i = 0; i < nums.length; i++) {
  	  if(nums[i] != original[i]) hm++;
  	}
  	return hm / 2;
	}
	return hm;
}
*/


module.exports = minSwaps;
