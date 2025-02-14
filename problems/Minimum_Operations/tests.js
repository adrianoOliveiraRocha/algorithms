'use strict'
const minOperations = require('./main');
const Tets = {
  ex1(){
    let nums = [2,11,10,1,3], k = 10;
    console.log(minOperations(nums, k))
  },

  ex2() {
    let nums = [1,1,2,4,9], k = 20;
    console.log(minOperations(nums, k));
  }
}

Tets.ex1(); //2
Tets.ex2(); //4