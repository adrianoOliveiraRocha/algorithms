'use strict'

// You have passed all of the tests! :)

const Test = {
  test1() {
    let d = 'R', a = [3, 2, 1, 2]
    console.log(flip(d, a)); 
  },

  test2() {
    let d = 'L', a = [1, 4, 5, 3, 5]
    console.log(flip(d, a)); 
  }
}

const flip=(d, a)=>{
  if(d == 'R') {
    return a.sort((a, b) => a-b);
  } else {
    return a.sort((a, b) => b-a);
  }
  return 
}

Test.test2()