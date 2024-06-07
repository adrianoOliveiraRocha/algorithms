const lockerRun = require('./main')

const Test = {
  test1() {
    console.log(lockerRun(1))
  },

  test2() {
    console.log(lockerRun(2))
  },

  test3() {
    console.log(lockerRun(3))
  },

  test5() {
    console.log(lockerRun(5))
  },

  test8() {
    console.log(lockerRun(8))
  },

  test10() {
    console.log(lockerRun(10))
  },

  test8131259() {
    console.log(lockerRun(8131259))
  }
}

// Test.test1();
// Test.test2();
// Test.test3();
// Test.test5();
// Test.test8();
// Test.test8131259()
Test.test10();