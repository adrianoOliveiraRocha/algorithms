'use strict'

// 310/350
function duplicates(a, n) {
  let hm = {};
  let res = [];

  for(let i = 0; i < n; i++) {
    if(hm[a[i]] && !res.includes(a[i])) res.push(a[i]);
    else hm[a[i]] = 1;
  }
  
  if(res.length > 0) return res.sort((a, b) => a - b);
  return [-1];
}

// 242/350
function duplicates1(a, n) {
  let res = [];

  for(let i = 0; i < n; i++) {
    if(a.slice(i+1, n).includes(a[i]) && !res.includes(a[i])) {
      res.push(a[i]);
    }
  }
  
  if(res.length > 0) return res.sort((a, b) => a - b);
  return [-1];
}

function duplicates2(a, n) {
  let res = a.filter((value, index) => a.indexOf(value) !== index);
  if(res.length > 0) return res.sort((a, b) => a - b);
  return [-1];
}
// Correct
function duplicates3(a, n) {
  let res = [];
  a.sort((a, b) => a - b);
  for(let i = 1; i < n; i++) {
    if(a[i] == a[i-1] && a[i] != a[i+1]) res.push(a[i]);
  }
  if(res.length > 0) return res;
  return [-1];
}
 
 

module.exports = duplicates3;