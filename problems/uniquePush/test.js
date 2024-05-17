'use strict'
const uniquePush = require('./main');
const Test = {
  test1() {
    let arr = [
      {name:'bob', phoneNumber:1234},
      {name:'joe', phoneNumber:12345},
      {name:'I am duped', phoneNumber:12345}
    ]
    let obj = {name:'July', phoneNumber:12345};
    console.log(uniquePush(arr, obj));
  }
}

Test.test1()