const LRUCache = require("./LRUCache");

let myLRU = new LRUCache(5);
myLRU.set(1, 1); // 1
myLRU.set(2, 2); // 1 <-> 2
myLRU.set(3, 3); // 1 <-> 2 <-> 3
myLRU.set(4, 4); // 1 <-> 2 <-> 3 <-> 4
myLRU.set(5, 5); // 1 <-> 2 <-> 3 <-> 4 <-> 5

myLRU.get(1);
myLRU.get(2);

myLRU.set(6, 6);
myLRU.set(7, 7);
myLRU.set(8, 8);

console.log(myLRU)