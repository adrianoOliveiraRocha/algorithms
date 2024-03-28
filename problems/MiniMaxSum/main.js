
function miniMaxSum(arr) {

  let minElement = arr[0], maxElement = arr[0], sum = 0;

  for(el of arr) {
    if(el < minElement) minElement = el;
    if(el > maxElement) maxElement = el;
    sum += el;
  }

  console.log(sum - maxElement, sum - minElement);

}

let arr = [1, 3, 5, 7, 9];
miniMaxSum(arr);