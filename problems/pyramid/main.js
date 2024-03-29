'use static'

function pyramid(n) {
  if(n == 0) return "\n";
  let res ="", lineWeigth = 2 * n, l = n; r = n+1;
  for(let i = 1; i <= n; i++) {    
    let line = "";
    for(let j = 1; j <= lineWeigth; j++) {
      if(j == l) line+="/";
      else if(j == r) line+="\\";
      else line+=" ";     
    }
    l--, r++;
    if(i == n) { // last line
      for(let x = 0; x < line.length; x++) {
        if(line[x] != " ") {
          console.log(`line[${x}]: `, line[x])
        } else {
          console.log(`line[${x}] is space`)
        }
      }
    }
    res += line;
    if(i < n) res+="\n";
  }
  return res;
}

const Tests = {
  // 1, 2, 4, 6, 10
  test1() {
    console.log(pyramid(4));
  }
}

Tests.test1();