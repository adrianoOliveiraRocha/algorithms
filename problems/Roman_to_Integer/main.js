'use strict'
/*
I [V, X]
X [L, C]
C [D, M]
*/
var romanToInt = function(s) {
  let v = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 
    'M': 1000}
  let a = s.split('');
  let n = 0;
  let i = 0;
  while(i < a.length) {
    if(a[i] == 'I') {
      if(a[i+1] && a[i+1] == 'V') {
        n = n + v['V'] - v['I']; i++;
      } else if(a[i+1] && a[i+1] == 'X') {
        n = n + v['X'] - v['I']; i++;
      } else {
        n += v['I'];
      }
    } else if(a[i] == 'V') {
      n += v['V'];
    } else if(a[i] == 'X') {
      if(a[i+1] && a[i+1] == 'L') {
        n = n + v['L'] - v['X']; i++;
      } else if(a[i+1] && a[i+1] == 'C') {
        n = n + v['C'] - v['X']; i++;
      } else {
        n += v['X'];
      }
    } else if(a[i] == 'L') {
      n += v['L'];
    } else if(a[i] == 'C') {
      if(a[i+1] && a[i+1] == 'D') {
        n = n + v['D'] - v['C']; i++;
      } else if(a[i+1] && a[i+1] == 'M') {
        n = n + v['M'] - v['C']; i++;
      } else {
        n += v['C'];
      }
    } else if(a[i] == 'D') {
      n += v['D'];
    } else if(a[i] == 'M') {
      n += v['M'];
    }
    i++;
  }

  return n;

};

module.exports = romanToInt;