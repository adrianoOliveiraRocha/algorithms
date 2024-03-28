'use strict'
// Success
function sockMerchant(n, ar) {
  let map = {};
  ar.forEach(color => {
    if(map[color]) map[color]++;
    else map[color] = 1;
  });
  let howMuchPairs = 0;
  Object.keys(map).forEach(k => {
    howMuchPairs += parseInt(map[k] /2);
  })
  return howMuchPairs;
}

const Test = {
  test1() {
    let n = 7;
    let ar = [1, 2, 1, 2, 1, 3, 2];
    sockMerchant(n, ar);
  }
}

Test.test1();