'use strict'
// Passou. Vai pŕo próximo
function generateHashtag (str) { 
  function onlySpace(str) {
    let isSpace = 0;
    for(let i = 0; i < str.length; i++) {      
      if(str.charCodeAt(i) == 32) isSpace++;
    }
    if(str.length == isSpace) return true;
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if(str.length == 0) return false;
  if(onlySpace(str)) return false;

  let words = str.split(' ');
  let newStr = "#";
  for(let i = 0; i < words.length; i++) {
    newStr += capitalizeFirstLetter(words[i]);
  }

  if(newStr.length > 140) return false;
  else return newStr;
}

module.exports = generateHashtag;