
let arr = [77, 51, 11, 37, 29, 13, 21]

function bs(arr) {
	let count = 0
	for(let i = 0; i < arr.length; i++) {
		for(let j = 0; j < arr.length; j++) {
			if(arr[i] < arr[j]) {
				count++
				let temp = arr[j]
				arr[j] = arr[i]
				arr[i] = temp
			}
		}
	}
	return [arr, count]
}

console.log(bs(arr))