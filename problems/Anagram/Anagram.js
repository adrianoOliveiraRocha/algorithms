'use strict'

/*
This is ly :-(
For Input: 
b d
Your Code's output is: 
YES // No :( my code return NO
It's Correct output is: 
NO
Output Difference
YESNO
*/

/**
 * @param {string} a
 * @param {string} b
 * @returns {boolean}
*/
 
class Solution {

	constructor() {
		this.test1(); // YES
		this.test2(); // NO
	}

	test1() {
		let a = "geeksforgeeks", b = "forgeeksgeeks";
		console.log(this.isAnagram(a, b));
	}

	test2() {
		let a = "b", b = "d";
		console.log(this.isAnagram(a, b));
	}

  isAnagram(a, b) {
		let x = a.toLowerCase().split('').sort().join("");
		let y = b.toLowerCase().split('').sort().join("");
		if(x == y) return "YES"; 
		else return "NO";
	}
}

new Solution();