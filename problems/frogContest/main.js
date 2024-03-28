'use strict'

//Return the string in the description with the number of flies eaten for each frog.
function frogContest(n) {
  const summation = (n) => {
    console.log('n=', n)
    let r = 0;
    for(let i = 1; i <= n; i++) {
      r+=i;
    }
    return r;
  }
  let c = summation(n);
  let t = summation(parseInt(c/2));
  let cat = summation(c+t);
  return `Chris ate ${c} flies, Tom ate ${t} flies and Cat ate ${cat} flies`;
}

const Test = {
  test1() {
    /*
    Error: Expected: Chris ate 15 flies, Tom ate 28 flies and Cat ate 946 flies. 
    Actual: Chris ate 15 flies, Tom ate 3 flies and Cat ate 171 flies
    */
    console.log(frogContest(5));
  }
}

Test.test1();