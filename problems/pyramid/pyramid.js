'use static'

function pyramid(n) {
  let res ="", lineWeigth = 2 * n, l = n; r = n+1;
  for(let i = 1; i <= n; i++) {    
    let line = "";
    for(let j = 1; j <= lineWeigth; j++) {
      if(j == l) line+="/";
      else if(j == r) line+="\\";
      else {
        if(i == n) line+="_";
        else line+=" ";
      }     
    }
    l--, r++;
    res += line;
    if(i < n) res+="\n";
  }
  return res + "\n";
}

module.exports = pyramid;