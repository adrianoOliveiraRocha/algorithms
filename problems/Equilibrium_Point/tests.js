'use strict'
const equilibriumPoint = require('./main');

const Test =  {
	test1() {
		let n = 5 
		let a = [1,3,5,2,2];
		console.log(equilibriumPoint(a, n));
	},

	test2() {
		let n = 1 
		let a = [1];
		console.log(equilibriumPoint(a, n));
	}
}

Test.test1();
Test.test2();



