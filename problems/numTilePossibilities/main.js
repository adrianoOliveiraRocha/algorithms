'use strict'

function numTilePossibilities(tiles) {
  // Count the frequency of each letter
  const count = {};
  for (const tile of tiles) {
    if(!count[tile]) 
      count[tile] = 1;
    else 
      count[tile]++;
  }
  // Backtracking function to generate sequences
  function backtrack() {
    let total = 0;
    for(const letter in count) {
      if(count[letter] > 0) {
        // Choose this letter
        total++;
        count[letter]--;
        // Recurse with the updated count
        total += backtrack();
        // Unchoose this letter
        count[letter]++;
      }
    }
    return total;
  }

  return backtrack();
}

module.exports = numTilePossibilities;
