'use strict'
const { check1, check2, check3 } = require('./main');

const TestCheck1 = {
  test1() {
    let a = [1,2,5,4,0]
    let b = [2,4,5,0,1]
    let n = 5
    return check1(a, b, n)
  },

  test2() {
    let a = [1,2,5]
    let b = [2,4,15]
    let n = 5
    return check1(a, b, n)
  },
  
}

const TestCheck2 = {
  test1() {
    let a = [1,2,5]
    let b = [2,4,15]
    let n = 5
    return check2(a, b, n)
  },

  test2() {
    let a = [1,2,5,4,0]
    let b = [2,4,5,0,1]
    let n = 5
    return check2(a, b, n)
  },

  test3() {
    let a = [8, 9, 7, 5, 3, 1]
    let b = [5, 4, 2, 5, 1, 7]
    let n = 6;
    let t0 = performance.now()
    let result = check2(a, b, n);
    let t1 = performance.now();
    let per = t0 - t1;
    return {per, result}
  }
}

const TestCheck3 = {
  test1() {
    let a = [1,2,5]
    let b = [2,4,15]
    let n = 5
    return check2(a, b, n)
  },

  test2() {
    let a = [1,2,5,4,0]
    let b = [2,4,5,0,1]
    let n = 5
    return check2(a, b, n)
  },

  test3() {
    let a = [8, 9, 7, 5, 3, 1]
    let b = [5, 4, 2, 5, 1, 7]
    let n = 6;
    return check3(a, b, n);
  }
}

console.log(TestCheck3.test1());
console.log(TestCheck3.test2());
console.log(TestCheck3.test3());
