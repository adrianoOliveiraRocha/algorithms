'use strict'
const numTilePossibilities = require('./main');

const Tests = {
  t1() {
    // "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
    // "BA", "ABA", "BAA".
    let tiles = "AAB";
    console.log(numTilePossibilities(tiles));
  },

  t2() {
    let tiles = "AAABBC";
    console.log(numTilePossibilities(tiles));
  },

  t3() {
    let tiles = "V";
    console.log(numTilePossibilities(tiles));
  },

  aleatories() {
    let count = { A: 2, B: 1 };
    for(const letter in count) {
      console.log(letter);
    }
  }
}
Tests.t1() // 8
// Tests.t2() // 188
// Tests.t3() // 1
// Tests.aleatories();