'use strict'

function migratoryBirds(arr) {
  let map = {}
  arr.forEach(b => {
    if(map[b]) map[b]++;
    else map[b] = 1;
  });
  let mf = Math.max(...Object.values(map))
  let mft = arr.filter(t => {
    return map[t] == mf;
  })
  return Math.min(...mft);
}

module.exports = migratoryBirds;