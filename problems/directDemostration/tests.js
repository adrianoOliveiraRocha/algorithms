'use strict'
const Main = require('./main');
const Test = {
  a() {
    let values = [];
    for(let i = -99; i <= 99; i++) {
      if(Math.abs(i) % 2 != 0) {
        values.push(i);
      }
    }
    console.log(Main.test(values));
  }
}

Test.a();