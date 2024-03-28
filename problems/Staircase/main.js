'use strict';

function staircase(n) {
  lines = "";
  let count = n;
  for(let i = 1; i <= n; i++) {
    let line = "";
    for(let j = 1; j <= n; j++) {
      if(j < count) line += ' ';
      else line += '#'
    }
    count--;
    lines += line;
    if(i < n) lines += "\n";
  }
  console.log(lines);
}

staircase(4);