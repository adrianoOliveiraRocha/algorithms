'use strict'
const missingNumber = require('./main');

const Test = {
	test1() {
		let n = 5;
		let a = [1,2,3,5];
		console.log(missingNumber(a, n));
	},

	test2() {
		let n = 10;
		let a = [6,1,2,8,3,4,7,10,5];
		console.log(missingNumber(a, n));
	},

	test3() {
		let n = 5;
		let a = [1, 2, 3, 4];
		console.log(missingNumber(a, n));
	},

	test4() {
		let n = 7;
		let a = [2, 3, 4, 5, 6, 7];
		console.log(missingNumber(a, n));
	}
 }

// Test.test1(); //ok
// Test.test2(); //ok
// Test.test3(); //ok
Test.test4(); //ok