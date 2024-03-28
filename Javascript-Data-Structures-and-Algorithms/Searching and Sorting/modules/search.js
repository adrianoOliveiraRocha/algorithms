'use strict'
/*
That's more simple search method. The algorithem will lokking for
the give numner for the entaire array
*/
function linearSearch(arr, n) { 
  for (const el of arr) {
    if(el == n) return true;
  }
  return false;
}


module.exports.linearSearch = linearSearch;

/* In this method, the algorithm search in the center of the a sorted array. 
  If dont get success in the search, it will test if the searched number 
  is major or minor then the central number. If minor, the seraching will
  happen in the first part of the array. And so on... */
function binarySearch(arr, n) {  
  arr.sort((a, b) => a-b);
  let lowIndex = 0, higthIndex = (arr.length - 1)
  while(lowIndex < (higthIndex + 1)) {
    let midIndex = Math.floor((lowIndex + higthIndex) / 2);
    if(arr[midIndex] == n) {
      return midIndex;
    }
    else if(n > arr[midIndex]) {
      lowIndex = midIndex;
    }
    else {
      higthIndex = midIndex
    }
  }
  return -1
}

module.exports.binarySearch = binarySearch;

function binarySearch_mysolution(arr, n) {
  let response = false;
  function main(arr, n) {
    let center = Math.ceil(arr.length / 2)
    if(n == arr[center]) {
      response = true;
    } 
    if(arr.length > 0) {
      if(n < arr[center]) {
        main(arr.splice(0, center), n)
      } else if (n > arr[center]) {
        main(arr.splice(-center), n)
      }      
    }
  }  
  main(arr, n)
  return response;  
}
