'use strict'
const threePowers = require('./main.js')
/*
n = 9: expected false to equal true
n = 276: expected false to equal true
*/
const Tests = {
  test1() {
    console.log(threePowers(2))  
  },
  
  test2() {
    console.log(threePowers(3))  
  },
  
  test3() {
    console.log(threePowers(5))  
  },
  
  test4() {
    console.log(threePowers(15))  
  },
  
  test5() {
    console.log(threePowers(9))  
  },
  
  test6() {
    console.log(threePowers(276))  
  }
}

//Tests.test1();
//Tests.test2();
//Tests.test3();
//Tests.test4();
Tests.test5()
Tests.test6()

