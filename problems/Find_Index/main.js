'use strict'

function findIndex(a, n, key) {
  let j = n-1, indexes = [-1, -1];
  for(let i = 0; i < n; i++) {
    if(indexes[0] == -1 && a[i] == key) indexes[0] = i;
    if(indexes[1] == -1 && a[j] == key) indexes[1] = j;
    j--;
  }
  return indexes;
}

module.exports = findIndex;