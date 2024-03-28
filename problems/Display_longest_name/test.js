'use strict'

const Solution = require("./main")

const Test = {
  test1() {
    let arr = ["Geek", "Geeks", "Geeksfor", "GeeksforGeek", "GeeksforGeeks"]
    console.log(new Solution().longest(arr, arr.length))
  }
}

Test.test1()
