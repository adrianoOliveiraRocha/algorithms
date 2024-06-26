'use strict'

const lengthOfSequence = (arr, n) => {
  console.log(arr)
  let fI = arr.indexOf(n) 
  if(fI == -1) return 0
  arr = arr.slice(fI+1, arr.length)
  console.log(arr)
  let sI = arr.indexOf(n)
  if(sI == -1) return 0
  sI = fI+1 + sI
  arr = arr.slice(sI+1, arr.length)
  console.log(arr)
  if(arr.includes(n)) return 0
  else return sI - fI + 1;
}

module.exports = lengthOfSequence
