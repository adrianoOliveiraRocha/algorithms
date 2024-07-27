'use strict'

const threePowers = require('./main.js')

const Tests = {
  test2() {
    console.log(threePowers(2)) //false  
  },
  
  test3() {
    console.log(threePowers(3)) //true 
  },
  
  test5() {
    console.log(threePowers(5)) //true 
  },
  
  test15() {
    console.log(threePowers(15)) //false 
  },
  
  test9() {
    console.log(threePowers(9)) // true 
  },
  
  test276() {
    console.log(threePowers(276)) // true
  },
  
  test() {
    console.log(9 >> 1)
  }
}

//Tests.test()
//Tests.test2() //false
//Tests.test3() //true
//Tests.test5() //true
//Tests.test15() //false 
//Tests.test9() //true
Tests.test276() //true

