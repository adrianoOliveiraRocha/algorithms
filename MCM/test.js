'use strict'

// e) f(x) = -k * x + sqrt(2)
console.log('test')
for(let k = - 5; k <= 5; k++) {
  let a = -k * 10 + Math.sqrt(2);
  if(a == 0) console.log("k != ", k);
}
