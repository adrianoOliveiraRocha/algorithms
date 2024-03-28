'use strict'

function pageCount(n, p) {
  let book = [];
  for(let i = 0; i <= n; i+=2) {
    let page = []
    if(i <= n) page.push(i);
    if(i+1 <= n) page.push(i+1);
    book.push(page);
  }

  let direction = p - 1 < n - p ? "from1" : "fromN";
  
  if(direction == "from1") {
    for(let i = 0; i < n; i++) {
      if(book[i].includes(p)) return i;
    }
  } else {
    book.reverse();
    for(let i = 0; i < n; i++) {
      if(book[i].includes(p)) return i;
    }
  }  
}

const Test = {
  test1() {
    let n = 11, p = 10;
    console.log(pageCount(n, p))
  }
}

Test.test1();