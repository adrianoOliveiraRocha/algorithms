'use static'

/*
Given a set of items, each with a weight and a value, determine 
which items to include in the collection so that the total weight 
is less than or equal to a given limit and the total value is as 
large as possible.
*/

function knapsackNaive(index, weights, values, target) {
  let result = 0;
  if(index <= -1 || target <= 0) {
    result = 0;
  } else if(weights[index] > target) {
    result = knapsackNaive(index - 1, weights, values, target);
  } else {
    // case 1:
    let current = knapsackNaive(index - 1, weights, values, target);
    // case 2:
    let currentPlusOther = values[index] + 
    knapsackNaive(index - 1, weights, values, target - weights[index]);
    result = Math.max(current, currentPlusOther);
  }
  return result;
}

function knapsackDP(index, weights, values, target, matrixDP) {
  let result = 0;
  
  if(matrixDP[index + '-' + target]) {
    return matrixDP[index + '-' + target];
  } 

  if(index <= -1 || target <= 0) {
    result = 0;
  } else if(weights[index] > target) {
    result = knapsackDP(index - 1, weights, values, target, matrixDP);
  } else {
    // case 1:
    let current = knapsackDP(index - 1, weights, values, target, matrixDP);
    // case 2:
    let currentPlusOther = values[index] + 
    knapsackDP(index - 1, weights, values, target - weights[index], matrixDP);
    result = Math.max(current, currentPlusOther);
  }
  matrixDP[index + '-' + target] = result;
  return result;
}

let weights = [1,2,4,2,5], values = [5,3,5,3,2], target = 10;
let res = knapsackDP(4, weights, values, target, {});
console.log(res);