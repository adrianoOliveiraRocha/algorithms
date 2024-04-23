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
}

Test.test3();