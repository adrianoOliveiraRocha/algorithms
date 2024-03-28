'use strict'

/* 
hash2(x) = R − (x % R)
x is the result from hashing the first time
R is less than the size of the hash table
resolve colision: i * hash 2 (x)
*/

function hash1(numebersQuantity, n) {
  return n % numebersQuantity;
}

let keys = [2, 1, 4, 6, 23, 4, 2, 2, 2, 2];

function hash2(keys) {
  let hashKeys = [];
  for(let i = 0; i < keys.length; i++) {
    let hashKey = hash1(keys.length, keys[i]);
    if(hashKeys.includes(hashKey)) {
      hashKeys.push(i * hashKey);
    } else {
      hashKeys.push(hashKey);
    }
  }
  return hashKeys;
}

let res = hash2(keys);
console.log(res); 