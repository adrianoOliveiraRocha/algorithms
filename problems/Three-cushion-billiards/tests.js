'use strict'

const hasScored = require('./hasScored')

/*
erros

input: 'eRRseRsY': expected false to equal true

input: 'YYneYeRsR': expected false to equal true

input: 'swWeWWwR': expected false to equal true

input: 'RReswwYs': expected false to equal true


*/

const Tests = {
  init() {
    // this.test1() // true
    // this.test2() // true
    // this.test3() // true
    // this.test4() // false
    // this.test5() // false
    // this.test6() // false
    // this.test7() // false
    // this.test8() // false
    // this.test9() // false
    // this.test10() // false
    // this.test11() //false
    // this.test12() // false
    // this.test13() //true
    // this.test14() //true
    // this.test15() // true;
    // this.test16() // true
    // this.test17() // true
    this.test18() // true
  },

  test1() {
    let s = "YnesR"
    console.log(hasScored(s))
  },

  test2() {
    let s = "RnesY"
    console.log(hasScored(s))
  },

  test3() {
    let s = "WnesR"
    console.log(hasScored(s))
  },
  // no score
  test4() {
    let s = ""
    console.log(hasScored(s))
  },

  test5() { 
    let s = "YneRw"
    console.log(hasScored(s))
  },

  test6() {
    let s = "wYnwY"
    console.log(hasScored(s))
  },

  test7() {
    let s = "neR"
    console.log(hasScored(s))
  },

  test8() {
    let s = "YRnnenRY"
    console.log(hasScored(s))
  },

  test9() {
    let s = "eRWewsnW"
    console.log(hasScored(s))
  },

  test10() {
    let s = "wWnsR"
    console.log(hasScored(s))
  },

  test11() {
    let s = 'YneRw'
    console.log(hasScored(s))
  },

  test12() {
    let s = 'YneswR'
    console.log(hasScored(s))
  },

  test13() {
    let s = 'eRRseRsY'
    console.log(hasScored(s))
  },

  test14() {
    let s = 'YYneYeRsR'
    console.log(hasScored(s))
  },

  test15() {
    let s = 'swWeWWwR';
    console.log(hasScored(s))
  },

  test16() {
    let s = 'RReswwYs'
    console.log(hasScored(s))
  },

  test17() {
    let s = "RswwYwRY"
    console.log(hasScored(s))
  },

  test18() { 
    //input: 'esRnYnRYY': expected false to equal true
    let s = 'esRnYnRYY';
    console.log(hasScored(s))
  }
}

Tests.init()