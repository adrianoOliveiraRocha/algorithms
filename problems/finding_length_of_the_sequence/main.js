'use strict'

const lengthOfSequence = (arr, n) => {
  let fI = arr.indexOf(n) 
  if(fI == -1) return 0
  arr = arr.slice(fI+1, arr.length)
  let sI = arr.indexOf(n)
  if(sI == -1) return 0
  let temp = [...arr]
  arr = arr.slice(0, sI)
  if(temp.slice(sI+1).includes(n)) return 0
  else return arr.length + 2;
}

module.exports = lengthOfSequence
