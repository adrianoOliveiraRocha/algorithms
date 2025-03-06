'use strict'
// IdentityFunction
/*
y = ax + b
a = 1; b = 0
*/
const MakeGraph = require('./makeGraph');

function IdentityFunction(xArr) {
  let a = 1, b = 0;
  let orderedPairs = [];
  for(let x of xArr) {
    orderedPairs.push([x, ((a * x) + b)]);
  }
  return orderedPairs;
}

let orderedPairs = IdentityFunction([-2, -1, 0, 1, 2, 3, 4, 5]);
MakeGraph.define(orderedPairs);
MakeGraph.show();