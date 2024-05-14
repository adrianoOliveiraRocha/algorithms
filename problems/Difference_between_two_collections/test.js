'use strict'

import diff from "./index.js";

const  Test = {
  test1() {
    //(diff(["a","b"], ["a","b"]), [])
    console.log(diff(["a","b"], ["a","b"]));
  }, 
  
  test2() {
    console.log(diff(["c","b", "a"], ["a","b"]));
  },

  test3() {
    console.log(diff(["a","b"], ["a","b", "c"]));
  },

  test4() {
    console.log(diff(["a","b", "c"], ["a","b", "d"]));
  },

  test5() {
    console.log(diff(['a', 'a', 't', 'e', 'f', 'i', 'j'], 
    ['t', 'g', 'g', 'i', 'k', 'f']));
  },

  test6() {
    let a = ["a","b","z","d","e","d"], b = ["a","b", "j","j"];
    console.log(diff(a, b)); //["d","e","j","z"]
  }
}

Test.test1();
Test.test2();
Test.test3();
Test.test4();
Test.test5();