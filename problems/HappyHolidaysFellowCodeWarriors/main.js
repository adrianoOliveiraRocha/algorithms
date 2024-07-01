'use strict'

function sortReindeer(reindeerNames) {
  let testDuplicate = [...new Set(reindeerNames)]
  if(testDuplicate.length != reindeerNames.length) return reindeerNames
  
  let sName = [], ordered = [], size = reindeerNames.length; 
  let equals = 0;  
  for(let i = 0; i < size; i++) {
    let sN = reindeerNames[i].split(" ")[1]
    if(sN == sName[i-1]) equals++;
    sName.push(reindeerNames[i].split(" ")[1])    
  }
  if(equals == reindeerNames.length-1) {
    if(sName[0] == reindeerNames[0].split(" ")[1]) return reindeerNames 
  }
  sName = sName.sort()
  let sNameCount = 0;
  while(sNameCount < size) {
    for(let j = 0; j < size; j++) {
      if(reindeerNames[j].includes(sName[sNameCount])) {
        ordered.push(reindeerNames[j])
        continue
      }
    }
    sNameCount++ 
  }
  return ordered;  
}

module.exports = sortReindeer
