'use strict'

/*
Sketch the graph of the functions and determine whether they are
increasing or decreasing
*/

const Solution = require('./main');

const Test = {
  a() { // pag 14
    new Solution("f(x) = 2x + 1");
  },

  b() { // pag 14
    new Solution("f(x) = -2x + 4");
  }
}

Test.a();
// Test.b();
