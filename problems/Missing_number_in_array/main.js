'use strict'
// Correct
function missingNumber(array, n) {	
	let s1 = 0, s2 = 0;
	for(let i = 0; i <= n; i++) {
		s1 += i;
		if(array[i-1]) s2 += array[i-1];
	}
	return s1 - s2;	
}



module.exports = missingNumber;