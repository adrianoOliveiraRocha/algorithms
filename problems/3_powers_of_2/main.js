'use strict'

/*
Caso 9
Depois da divisão eu tenho 3 3 3. Mas se n for 3 é true 
*/
/*
1:
function* generateNumbers(N) {
  for (let i = 1; i <= N; i++) yield i;
}

const createArray = (N) => [...generateNumbers(N)];

console.log(createArray(10)); 

2:
function createArray(N) {
    return Array(N).fill().map((_, index) => index + 1);
}

let N = 12;
let arr = createArray(N);
console.log(arr);
*/
function threePowers(n) {
  if(n < 3) return false
  n = parseInt(n)
  let r = n % 3
  let v = parseInt(n/3)
  if(testpw(v)) {
    return true
  } else {
    let max = n - 2
    let pot = [...generate(n)] 
    console.log(pot)
    let p1 = 0, p2 = 0, p3 = 0;
    let increment = 1
    while(true) {
      let x = pot[p1] + pot[p2] + pot[p3]
      if(x == n) return true
      if(x > n) return x // its has passed the limit. Come back
      else {
        if(increment == 1) {
          p1++
          increment++
        } else if(increment == 2) {
          p2++
          increment++
        } else if(increment == 3) {
          p3++
          increment = 1
        }
      }
    }
    console.log(pot)  
  }
}

function testpw(v) {
  let x = v;
  while(x > 2) {
    if(x % 2 != 0) return false;
    x = x/2;
  }
  return true
}

function generate(n) {
  let max = n - 2, index = 0, res = [];
  while(true) {
    let value = Math.pow(2, index)
    if(value <= max) {
      res.push(value)
      index++
    } else {
      break;
    }      
  }
  return res
}


module.exports = threePowers;

/*
function threePowers(n) {
  if(n < 3) return false
  n = parseInt(n)
  let r = n % 3
  let v = parseInt(n/3)
  console.log(n, v)
  if(testpw(v)) {
    return true
  } else {
    let max = n - 2
     
  }  
}


*/
