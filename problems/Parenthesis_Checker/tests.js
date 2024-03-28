const ispar = require('./main');

const Test = {
  test1() {
    let x = "{([])}";
    console.log(ispar(x));
  },

  test2() {
    let x = "()";
    console.log(ispar(x));
  },

  test3() {
    let x = "([]";
    console.log(ispar(x));
  },

  test4() {
    let x = "{}(){}[]";
    console.log(ispar(x));
  },

  test5() {
    let x = "([)]";
    console.log(ispar(x));
  }
}

Test.test1(); // true
Test.test2(); //true
Test.test3(); // false
Test.test4(); // true
Test.test5(); // false