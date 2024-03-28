'use strict'

let inversions = 0;

function merge(leftA, rightA) {
  /* add all the elements from both arrays in sorted order in a
  result array*/
  let results = [], leftIndex = 0, rigthIndex = 0;
  while(leftIndex < leftA.length && rigthIndex < rightA.length) {
    if(leftA[leftIndex] < rightA[rigthIndex]) {
      results.push(leftA[leftIndex++])
    } else {
      results.push(rightA[rigthIndex++]);
      inversions++;
    }
  }
  let leftRemains = leftA.slice(leftIndex) //from leftIndex to final 
  let rigthRemains = rightA.slice(rigthIndex) //from rigthIndex to final
  // add remaining to resultant array
  return results.concat(leftRemains).concat(rigthRemains);
}

function mergesort(array) {
  if(array.length < 2) return array;
  let midPoint = Math.floor(array.length / 2);
  let leftArray = array.slice(0, midPoint);
  let rigthArray = array.slice(midPoint);
  return merge(mergesort(leftArray), mergesort(rigthArray))
}

function inversionCount(arr, N) {
  mergesort(arr);
  return inversions;
}

// brute force
function inversionCountBF(arr, N) {
  let inversions = 0;
  for(let i = 0; i < N; i++) {
    for(let j = i+1; j < N; j++) {
      if(arr[i] > arr[j]) inversions++;
    }
  }
  return inversions;
}

module.exports = inversionCount;