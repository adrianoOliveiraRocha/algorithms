'use strict'

function BoyerMore() {
  //...
}

BoyerMore.prototype.buildBadMatchTable = function(str) {
  let tableObj = {}, strLength = str.length;
  for(let i = 0; i < strLength; i++) {
    tableObj[str[i]] = strLength - 1 - i;
  }
  if(tableObj[str[strLength - 1]] == undefined) {
    tableObj[str[strLength - 1]] = strLength;
  }
  return tableObj;
}

BoyerMore.prototype.search = function(str, pattern) {
  let badMatchTable = this.buildBadMatchTable(pattern),
  offset = 0, 
  patternLastIndex = pattern.length - 1,
  scanIndex = patternLastIndex,
  maxOffSet = str.length - pattern.length;
  
  // if the offset is bigger than maxOffset, cannot be found
  while(offset <= maxOffSet) {
    scanIndex = 0;
    while(pattern[scanIndex] == str[scanIndex + offset]) {
      if(scanIndex == patternLastIndex) {
        // found at this index
        return offset;
      }
      scanIndex++;
    }
    let badMatchString = str[offset + patternLastIndex];
    if(badMatchTable[badMatchString]) {
      // increase the offset if it exists
      offset += badMatchTable[badMatchString];
    } else {
      offset += 1;
    }
  }
  return -1;
}

module.exports = BoyerMore;