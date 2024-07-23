'use strict'

const threePowers = require('./main.js')
/*
n = 9: expected false to equal true
n = 276: expected false to equal true
*/
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
    /*
    n = 9 max = 9 - 2 = 7; Combinar potencias de 2 até o máximo
    que é 7; Ou seja, 1, 2, 4
    1 1 1 = 3
    2 1 1 = 4
    2 2 1 = 5
    2 2 2 = 6
    4 2 2 = 8
    4 4 2 = 10 Passou
    4 4 1 = 9 => True
    */
    console.log(threePowers(9)) // true 
  },
  
  test6() {
    console.log(threePowers(276)) // true
  }
}

//Tests.test2() //false
//Tests.test3() //true
//Tests.test5() //true
//Tests.test15() //false 
Tests.test9() //true
//Tests.test6() //true


