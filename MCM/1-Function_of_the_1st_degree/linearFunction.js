'use strict'

/*
y = ax + b
b = 0, a != 0 e
y = ax
a != 0 and a != 1, a e b belongs to |R
*/

const MakeGraph = require('./makeGraph');

function LinearFunction(xArr, a) {
  let orderedPairs = [];

  if(a === 0 || a === 1)
    throw new Error("a == 0 or a === 1");
  for (const x of xArr) {
    orderedPairs.push([x, (a * x)]);
  }

  return orderedPairs;

}

let xArr = [1, 2, 3, 4, 5];
let a = 2;

let orderedPairs = LinearFunction(xArr, a);
console.log(orderedPairs);
MakeGraph.define(orderedPairs);
MakeGraph.show();
