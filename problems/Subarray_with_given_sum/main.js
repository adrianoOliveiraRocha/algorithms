'use strict'
// Time Limit Exceted
function subarraySum(arr, n, s) {
	let init = 0;
	let i = 0;
	let sum = 0;
	while(i < n) {
		sum += arr[i];
		if(sum == s) {
			return [init + 1, i + 1]; 
			break;
		}
		else if(sum > s) {
			init++, i = init; sum = 0;
		} else {
			i++;
		}        
	}
	return [-1];
}


function subarraySumCorrect(arr, n, s) {
	let sum = 0;
	let rm = 0;
	let elements = [];

	if(s == 0) {
		elements.push(-1);
		return elements;
	}

	for(let i = 0; i < n; i++) {
		sum = sum + arr[i];
		if(sum >= s) {
			while(sum > s) {
				sum = sum - arr[rm];
				rm++;
			}
			if(sum == s) {
				elements.push(rm+1);
				elements.push(i+1);
				return elements;
			}
		}
	}
	elements.push(-1);
	return elements;
}

/*
Solution from the tutorial:
Time Exceted :p

function subarraySum1(arr, n, s) {
	let currentSum = 0;

	for (let i = 0; i < n; i++) {
		currentSum = arr[i];

		for (let j = i + 1; j <= n; j++) {
			if(currentSum == s) {
				return [i + 1, j];
			}
			if(currentSum > s || j == n) break;
			currentSum = currentSum + arr[j];
		}

	}

	return [-1];
}
*/

module.exports = subarraySumCorrect;