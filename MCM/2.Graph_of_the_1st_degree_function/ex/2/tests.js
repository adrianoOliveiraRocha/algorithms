'use strict'

/*
Difine the function f(x) = ax + b from two points of the grapph
*/
const Solution = require('./main');
const Tests = {
  test1() {
    let p1 = [1/2, 2], p2 = [3, -1];
    new Solution(p1, p2);
  }
}

Tests.test1();
