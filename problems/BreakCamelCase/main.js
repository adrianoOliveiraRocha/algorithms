'use strict'

function solution(string) {
  let tUpCS = string.toUpperCase(), res = "";
  for(let i = 0; i < string.length; i++) {
    if(string.charCodeAt(i) == tUpCS.charCodeAt(i)) {
      res+= " ", res+=string[i];
    } else {
      res+=string[i];
    }
  }
  return res;
}

console.log(solution("camelCasing"));
console.log(solution("identifier"));
console.log(solution("adrianoOliveira"));
console.log(solution(""));