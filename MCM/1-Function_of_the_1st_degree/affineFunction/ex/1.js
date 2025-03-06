/*
Obtain the value of m belongs to R so that the function is affine, in 
each case:
*/

let arr = [];
for(let i = -20; i <= 20; i++) {
  arr.push(i);
}

function a(arr) {
  // a) f(x) = (m + 1)x + 3
  let res;
  for(let i = 0; i <= arr.length-1; i++) {
    if(arr[i]+1 == 0) {
      res = `m != ${arr[i]}`;
    }
  }
  return res;
}

function b(arr) {
  // a) f(x) = (m^2 - 4)x + 3
  let res;
  for(let i = 0; i <= arr.length-1; i++) {
    if(Math.pow(arr[i], 2)-4 == 0) {
      res = `m != +/-${arr[i]}`;
    }
  }
  return res;
}

console.log(b(arr));


