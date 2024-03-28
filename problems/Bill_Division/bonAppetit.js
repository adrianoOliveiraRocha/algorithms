'use strict'
// Success
function bonAppetit(bill, k, b) {
  let s = 0;
  bill.map((v, i) => {
    if(i != k) s+=v;
  })
  s = s/2;
  if(s == b) console.log("Bon Appetit");
  else console.log(b - s);
}

const Test = {
  test1() {
    let bill = [3, 10, 2, 9]; // preço de cada item
    let k = 1; // k ẃ o indice
    let b = 12; // pagou isso
    bonAppetit(bill, k, b);
  }
}

Test.test1();