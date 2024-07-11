'use strict'
const obfuscate = require('./main.js')

/*
expected 'Hmm, this would be better with input validation...!' to equal 'Hmm, this would be better with input validation [dot]  [dot]  [dot] !'
*/

const Test = {
  test1() {
    console.log(obfuscate('user_name@example.com'))
  },
  
  test2() {
    console.log(obfuscate('af5134@borchmore.edu'))
  },
  
  test3() {
    console.log(obfuscate('jim.kuback@ennerman-hatano.com'))
  },
  
  test4() {
    console.log(obfuscate('Code_warrior@foo.ac.uk'))
  },
  
  test5() {
    console.log(obfuscate('Hmm, this would be better with input validation ... !'))
  }
}

//Test.test1();
//Test.test2();
//Test.test3();
//Test.test4();
Test.test5()


