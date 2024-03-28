'use strict'
const Solution = require('./main')
class Test {
  constructor() {
    // this.test1()
    // this.test2()
    this.test3()
  }

  test1() {
    let a = [
      [7, 8],
      [2, 9]
    ]
    let b = [
      [14, 5],
      [5, 18]
    ]
    let n = 2;
    let s = new Solution()
    console.log(s.multiply(a, b, n))
    // Output: C[][] = {{138, 179}, {73, 172}}
  }

  test2() {
    let a = [
      [3, 4],
      [2 , 5]
    ]
    let b = [
      [1, 6],
      [7, 8]
    ]
    let n = 2;
    let s = new Solution()
    console.log(s.multiply(a, b, n))
    // Output: C[][] = {{181, 38}, {265, 50}}
  }

  test3() {
    let a = [ 
      [ 7, 8, 6, 4 ], 
      [ 6, 7, 3, 10 ], 
      [ 2, 3, 8, 1 ], 
      [ 10, 4, 7, 1 ] 
    ]
    let b = [ 
      [ 7, 3, 7, 2 ], 
      [ 9, 8, 10, 3 ], 
      [ 1, 3, 4, 8 ], 
      [ 6, 10, 3, 3 ] 
    ]
    let n = 4
    let s = new Solution()
    console.log(s.multiply(a, b, n))
  }
}

new Test()