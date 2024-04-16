'use struct'
/*
"xxxooxoooo",70,"xxxoxxoooo"),[60,80]
"ooxooxooxo",50,"oooooxxxxx"),[10,90]
"xxxooxoooo",70,"xxxoxxoooo"),[60,80]
*/
const possibleScores = require('./main.js');
const Test = {
  test1() {
    let answerOfTom = "oooooooooo";
    let scoreOfTom = 20;
    let answerOfJohn = "oooooooooo"; 
    console.log(possibleScores(answerOfTom, scoreOfTom, answerOfJohn)) //20,20
  },

  test2() {
    let answerOfTom = "oooooooooo";
    let scoreOfTom = 20;
    let answerOfJohn = "xxxxxxxxxx"; 
    console.log(possibleScores(answerOfTom, scoreOfTom, answerOfJohn)) //80,80
  },

  test3() {
    let answerOfTom = "oooooooooo";
    let scoreOfTom = 20;
    let answerOfJohn = "oooooxxxxx"; 
    console.log(possibleScores(answerOfTom, scoreOfTom, answerOfJohn)) //30,70
  },

  test4() {
    "x x x o o x o o o o" // 70
    "x x x o x x o o o o" // [60,80]
    // mandou uma diferente. O mínimo é 7 - 1 (uma diferente)
    let answerOfTom = "xxxooxoooo";
    let scoreOfTom = 70;
    let answerOfJohn = "xxxoxxoooo"; 
    console.log(possibleScores(answerOfTom, scoreOfTom, answerOfJohn)) //[60,80]
  },

  test5() {
    "o o x o o x o o x o" //50 
    "o o o o o x x x x x" //[10,90]
    // mandou quatro diferentes. O mínimo é 5 - 4 (quatro diferentes)
    let answerOfTom = "ooxooxooxo";
    let scoreOfTom = 50;
    let answerOfJohn = "oooooxxxxx"; 
    console.log(possibleScores(answerOfTom, scoreOfTom, answerOfJohn)) //[10,90]
  }
}
Test.test4(); 
Test.test5();

