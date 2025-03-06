'use strict'

const MakeGraph = require('./../makeGraph');

let xArr = [];
for(let i = -4; i <= 4; i++) {
  xArr.push(i);
}

function a(xArr) {
  // y = 3x + 1
  let orderPairs = [];
  for(let x of xArr) {
    orderPairs.push([x, 3 * x + 1]);
  }
  console.log("a)");
  console.log(orderPairs);
  MakeGraph.define(orderPairs);
  MakeGraph.show();
}

function b(xArr) {
  // y = -x + 7
  let orderPairs = [];
  for(let x of xArr) {
    orderPairs.push([x, -x + 7]);
  }
  console.log("b)");
  console.log(orderPairs);
  MakeGraph.define(orderPairs);
  MakeGraph.show();
}

function c(xArr) {
  // y = -5x
  let orderPairs = [];
  for(let x of xArr) {
    orderPairs.push([x, -5 * x]);
  }
  console.log("c)");
  console.log(orderPairs);
  MakeGraph.define(orderPairs);
  MakeGraph.show();
}

a(xArr);
b(xArr);
c(xArr);