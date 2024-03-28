function getAllMultiples(n) {
  let m1 = 3, m2 = 5;
  let multiples = [];
  let sumMul = 0;
  for(let i = 1; i < n; i++) {
    if(i % m1 == 0 || i % m2 == 0) {
      multiples.push(i);
      sumMul += i;
    } 
  }
  return {multiples, sumMul};

}

let m = getAllMultiples(1000);
console.log(m);