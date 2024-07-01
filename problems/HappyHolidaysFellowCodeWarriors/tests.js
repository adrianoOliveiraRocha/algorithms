'use strict'

const sortReindeer = require('./main')

/*
Error:
The order is correct but is repeated :(
expected [ 'Kenjiro Mori', 'Susumu Mori', 'Akira Mori', 'Kenjiro Mori', 'Susumu Mori', 'Akira Mori', 'Kenjiro Mori', 'Susumu Mori', 'Akira Mori' ] to deeply equal [ 'Kenjiro Mori', 'Susumu Mori', 'Akira Mori' ]
*/

const Tests = {
  test1() {
    let reindeerNames = [
      "Dasher Tonoyan", 
      "Dancer Moore", 
      "Prancer Chua", 
      "Vixen Hall", 
      "Comet Karavani",
      "Cupid Foroutan", 
      "Donder Jonker", 
      "Blitzen Claus"
    ]
    console.log(sortReindeer(reindeerNames))
  },
  
  test2() {
    let reindeerNames = [
      "Dasher Tonoyan", 
      "Dancer Moore", 
      "Prancer Chua", 
      "Vixen Hall", 
      "Comet Karavani",
      "Cupid Foroutan", 
      "Donder Jonker", 
      "Blitzen Claus",
      "Dasher Tonoyan",
    ]
    console.log(sortReindeer(reindeerNames))
  },
  
  test3() {
    let reindeerNames = [
      'Kenjiro Mori', 'Susumu Mori', 'Akira Mori'
    ]
    console.log(sortReindeer(reindeerNames))
  }
}

Tests.test1();
Tests.test2();
Tests.test3();


