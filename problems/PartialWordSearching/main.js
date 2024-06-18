'use strict'

function wordSearch(query, seq){
  let querySize = query.length;
  let res = []
  for(let i = 0; i < seq.length; i++) {
    let word = seq[i] 
    for(let j = 0; j < word.length; j++) {
      if(word.slice(j, querySize).toLowerCase() == query) {
        res.push(word)
        continue
      }
      querySize++;
    }
    querySize = query.length
  }
  if(res.length > 0) return res
  return ['Empty']  
}

module.exports = wordSearch;