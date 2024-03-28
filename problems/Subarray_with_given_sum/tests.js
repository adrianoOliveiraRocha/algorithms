'use strict'
const subarraySum = require('./main');

const Test = {
	test1() {
		let n = 5, s = 12;
		let arr = [1,2,3,7,5];
		console.log(subarraySum(arr, n, s));
	},

	test2() {
		let n = 10, s = 15;
		let arr = [1,2,3,4,5,6,7,8,9,10];
		console.log(subarraySum(arr, n, s));
	},

	test3() {
		let n = 5, s = 12;
		let arr = [1,2,3,7,5];
		console.log(subarraySum1(arr, n, s));
	},

	test4() {
		let n = 10, s = 15;
		let arr = [1,2,3,4,5,6,7,8,9,10];
		console.log(subarraySum1(arr, n, s));
	}
}



Test.test1();
Test.test2();

console.log("\n")


// Test.test3();
// Test.test4();
