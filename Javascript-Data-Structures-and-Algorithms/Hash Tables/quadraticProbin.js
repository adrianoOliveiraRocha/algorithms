'use strict'
/*
My Quadratic Probin
*/
const HashTableManager = (function() {
  let hashTable = [];
  let h = 11;

  return {
    hash(key) {
      return h + Math.pow(key, 2) + key % h;
    },

    put(key, value) {

      try {
        
        HashTableManager.getHashTable().forEach((obj, index) => {
          if(obj.key == key) throw `Error! The key ${key} was used`;
        })  
        let hashedIndex = this.hash(key);
        while(hashTable[hashedIndex] !== undefined) {
          hashedIndex++;
        }
        hashTable[hashedIndex] = {key, value};

      } catch (error) {
        console.error(error);
      }
         
    },

    get(key) {
      console.log("Get element with key " + key);
      let hashedIndex = this.hash(key);
      let obj = hashTable[hashedIndex];
      return {
        hashedIndex, obj
      };
    },

    getHashTable() {
      return hashTable
    },

    getIndex() {
      return Object.keys(hashTable);
    }
  }
})();

let exampleObject = {
  7: "hi",
  20: "helo",
  33: "sunny",
  46: "weather",
  59: "wow",
  72: "forty",
  85: "happy",
  98: "sad",
}

HashTableManager.put(7, 'hi');
HashTableManager.put(33, 'sunny');
HashTableManager.put(46, "weather");
HashTableManager.put(59, "wow");
HashTableManager.put(72, "forty");
HashTableManager.put(85, "happy");
HashTableManager.put(98, "sad");
HashTableManager.put(7, 'test');
console.log("\n");
let obj = HashTableManager.get(59);
console.log(obj)