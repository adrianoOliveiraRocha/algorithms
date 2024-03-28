'use strict'

const Test = {
  test1() {
    console.log(neutralise("+-+", "+--")); // "+-0"
  },

  test2() {
    console.log(neutralise("--++--", "++--++")); // "000000"
  },

  test3() {
    console.log(neutralise("-+-+-+", "-+-+-+")); // "-+-+-+"
  }
}

function neutralise(s1, s2) {
  let res = "";
  for(let i = 0; i < s1.length; i++) {
    if(s1[i] == s2[i]) res+=s1[i];
    else res+="0"
  }
  return res;
}

Test.test3();

