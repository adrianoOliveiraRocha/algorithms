'use strict'

function maxSubarraySum(arr, N) {
  let max = arr[0]
  let currentSum = 0;

  for(let i = 0; i < N; i++) {
    currentSum += arr[i]
    max = currentSum > max ? currentSum : max
    currentSum = currentSum < 0 ? 0 : currentSum
  }

  return max;
}

module.exports = maxSubarraySum;