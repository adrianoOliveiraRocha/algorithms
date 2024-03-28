'use static'

function check(s){
  return new Array(s.length).fill(s[0]).join('') == s;
}

module.exports = check;