'use strict'
const numTilePossibilities = require('./main');

const Tests = {
  t1() {
    // "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
    // "BA", "ABA", "BAA".
    let tiles = "AAB";
    console.log(numTilePossibilities(tiles));
  }
}

Tests.t1()