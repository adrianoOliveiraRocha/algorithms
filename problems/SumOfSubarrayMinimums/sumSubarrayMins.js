'use strict'

function sumSubarrayMins(arr) {

  let minValues = 0;  

  for(let i = 0; i < arr.length; i++) {
    minValues += arr[i];
    let jArray = [arr[i]];    
    for(let j = i + 1; j < arr.length; j++) {
      jArray.push(arr[j]);   
      minValues += Math.min(...jArray);
    }     
  }

  return minValues % (Math.pow(10, 9) + 7) ; 

}

module.exports.sumSubarrayMins = sumSubarrayMins;


function goodSolution() {
  const stack = [];
  const MOD = 1000000007;
  let sum = 0;
  
  for (let i = 0; i <= arr.length; i++) {
    while (stack.length && (i === arr.length || arr[i] <= arr[stack[stack.length - 1]])) {
      const mid = stack.pop();
      const prev = stack.length? stack[stack.length - 1] : -1;
      const contribution = arr[mid] * (i - mid) * (mid - prev) % MOD;
      sum += contribution;
      sum %= MOD;
    }
    stack.push(i)
  }

  return sum;

}

module.exports.goodSolution = goodSolution;
