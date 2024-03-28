'use strict'

const Solution = require("./Solution")

class Test {
  constructor() {
    this.test1()
    this.test2()
  }

  test1() {
    let a = [4, 2, 7]
    let b = [5, 6, 3]
    let s = new Solution()
    console.log(s.scores(a, b)) // 0, 2
  }

  test2() {
    let a = [4, 2, 7]
    let b = [5, 2, 8]
    let s = new Solution()
    console.log(s.scores(a, b)) // 1, 2
  }
}

new Test()
