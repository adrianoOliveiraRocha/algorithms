'use strict'

function numTilePossibilities(tiles) {
  let diferents = Array.from(new Set([...tiles.split("")])).join("");
  let res = {}
  res[diferents] = permutation(diferents);
  
  for(let i = 0; i < tiles.length + 1; i++) {
    if(!Object.values(res).includes(tiles[i]) && tiles[i] != undefined)
      res[tiles[i]] = 1;
    if(!Object.keys(res).includes(tiles.slice(0, i)) && tiles.slice(0, i).length > 0) {
      let el = tiles.slice(0, i);
      res[el] = permutation(el);  
    }      
  }

  function permutation(el) {
    if(el.split('').every((char, index, arr) => char === arr[0])) {
      return 1;
    } else {
      let denominator = el.length;
      let denominatorFat = fatorial(denominator);
      let numeratorFat = 1;
      for(let i = 0; i < diferents.length; i++) {
        let dif = diferents[i]
        numeratorFat *= fatorial(el.split(dif).length - 1);
      }
      
      return denominatorFat / numeratorFat;
    } 
  }

  function fatorial(n) {
    let res = 1;
    for(let i = 1; i <= n; i++) {
      res*=i;
    }
    return res
  }

  return Object.values(res).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

module.exports = numTilePossibilities;