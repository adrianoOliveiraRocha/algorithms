'use strict'
const generateHashtag = require('./generateHashtag');
const Test = {
  test1() { // empty
    console.log(generateHashtag(""));
    console.log(generateHashtag(" ")); //32
  },

  test2() { // more than 140 characters
    console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"));
  },

  test3() { // more than 140 characters
    console.log(generateHashtag("Do We have A Hashtag")); // #DoWeHaveAHashtag
  },

  test4() {
    console.log(generateHashtag("Codewars"));
  },

  test5() {
    console.log(generateHashtag("Codewars Is Nice"));
  },

  test6() {
    console.log(generateHashtag("code" + " ".repeat(140) + "wars"))
  }
}

Test.test1();
Test.test2();
Test.test3();
Test.test4();
Test.test5();
Test.test6();