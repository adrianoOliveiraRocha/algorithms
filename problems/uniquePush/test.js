'use strict'
const uniquePush = require('./main');
const Test = {
  test1() { // it is unique
    let arr = [
      {name:'bob', phoneNumber:1234},
      {name:'joe', phoneNumber:12345}
    ]
    let obj = {name:'July', phoneNumber:87654555};
    console.log(uniquePush(arr, obj)); //true
  },

  test2() { // it isn't unique
    let arr = [
      {name:'bob', phoneNumber:1234},
      {name:'joe', phoneNumber:12345}
    ]
    let obj = {name:'July', phoneNumber:12345};
    console.log(uniquePush(arr, obj)); //false
  },

  test3() { // it doesn't has a phone number
    let arr = [
      {name:'bob', phoneNumber:1234},
      {name:'joe', phoneNumber:12345}
    ]
    let obj = {name:'July', phoneNumber:undefined};
    console.log(uniquePush(arr, obj)); //false
    obj = {name:'July'};
    console.log(uniquePush(arr, obj)); //false
  }
}

Test.test1()
Test.test2()
Test.test3()