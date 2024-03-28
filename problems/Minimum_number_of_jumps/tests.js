'use strict'

const fs = require('fs');
const minJumps = require('./main');

const Tests = {
  test1() {
    let n = 11;
    let a = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
    console.log(minJumps(a, n)); //output 3
  },

  test2() {
    let n = 6;
    let a = [1, 4, 3, 2, 6, 7];
    console.log(minJumps(a, n)); // output 2
  },

  test2_1() {
    let n = 6;
    let a = [1, 4, 3, 7, 6, 2];
    console.log(minJumps(a, n)); // output 2
  },

  test3() {
    let n = 10;
    let a = [2, 3, 1, 1, 2, 4, 2, 0, 1, 1];
    console.log(minJumps(a, n)); // output 4
  },

  test4() {
    let n = 84;
    let data = fs.readFileSync('fileInput.txt', 'utf8');
    let prepare = data.split(' ');
    let a = []
    for(let i = 0; i < prepare.length; i++) {
      a.push(parseInt(prepare[i]));
    }
    // console.log(a);
    console.log(minJumps(a, n)); // output 2
  },

  test5() {
    let n = 5;
    let arr = [0, 1, 1, 1, 1];
    console.log(minJumps(arr, n)); // output -1
  }

}

Tests.test1(); //output 3
Tests.test2(); // output 2
Tests.test2_1(); // output 2
Tests.test3(); // output 4
Tests.test4(); // output 2
Tests.test5() //output -1