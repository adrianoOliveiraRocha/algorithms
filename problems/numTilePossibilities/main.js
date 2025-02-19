'use strict'

function numTilePossibilities(tiles) {
  let diferents = Array.from(new Set([...tiles.split("")])).join("")
  let res = {}
  res[diferents] = 1;
  
  for(let i = 0; i < tiles.length + 1; i++) {
    if(!Object.values(res).includes(tiles[i]) && tiles[i] != undefined)
      res[tiles[i]] = 1;
    if(!Object.keys(res).includes(tiles.slice(0, i)) && tiles.slice(0, i).length > 0)
      res[tiles.slice(0, i)] = 1;
  }

  Object.keys(res).forEach(key => {
    if(!key.split('').every((char, index, arr) => char === arr[0])) {
      console.log("simple permutation of ", key)
    } else {
      console.log(key, res[key]);
    }
  });

  
  /*
  function allCharactersEqual(str) {
    return str.split('').every((char, index, arr) => char === arr[0]);
  }
  if a element has more then one different character, simple permutation 

  P(n;n1​,n2​,…,nk​)=n1​!⋅n2​!⋅⋯⋅nk​!n!​

  Onde:

  nn é o número total de elementos.

  n1,n2,…,nkn1​,n2​,…,nk​ são as quantidades de elementos repetidos.
  No caso da palavra AAB:

    Temos n=3 caracteres no total.

    A letra A repete-se 2 vezes.

    A letra B aparece 1 vez.

    P(3;2,1)= 3!​ / 2!⋅1!
  */ 
  return res;
}

module.exports = numTilePossibilities;