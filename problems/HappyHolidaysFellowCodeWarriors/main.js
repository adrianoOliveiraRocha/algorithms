'use strict'

function sortReindeer(reindeerNames) {
  let testDuplicate = [...new Set(reindeerNames)]
  if(testDuplicate.length != reindeerNames.length) return reindeerNames
  
  let sName = [], ordered = [], size = reindeerNames.length; 
  for(let i = 0; i < size; i++) {
    sName.push(reindeerNames[i].split(" ")[1])    
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
