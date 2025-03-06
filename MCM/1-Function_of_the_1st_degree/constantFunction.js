'use strict'
/*
y = ax + b
a = 0 
*/

const MakeGraph = require('./makeGraph');

function constantFunction(xArr, b) {
  let a = 0;
  let orderedPairs = [];
  for(let x of xArr) {
    let orderedPair = [];
    orderedPair.push(x);
    orderedPair.push((a * x) + b);
    orderedPairs.push(orderedPair);
  }
  
  return orderedPairs;
  
}

let xArr = [0, 1, 2, 3, 4, 5];
let orderedPairs = constantFunction(xArr, 5);
MakeGraph.define(orderedPairs);
MakeGraph.show();