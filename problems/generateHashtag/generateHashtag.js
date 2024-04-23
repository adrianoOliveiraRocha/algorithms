'use strict'

function generateHashtag (str) {  
  function onlySpace(str) {
    let isSpace = 0;
    for(let i = 0; i < str.length; i++) {      
      if(str.charCodeAt(i) == 32) isSpace++;
    }
    if(str.length == isSpace) return true;
  }

  if(str.length == 0) return false;
  if(str.length > 140) return false;
  if(onlySpace(str)) return false;

  let words = str.split(' ');
  let newStr;
  for(let i = 0; i < words.length; i++) {
    newStr+="#";
    newStr+=words[i].toUpperCase();
  }
  return newStr;
}

module.exports = generateHashtag;