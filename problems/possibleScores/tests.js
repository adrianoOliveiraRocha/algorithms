'use struct'

/*
"x x x o o x o o o o" // 70
"x x x o x x o o o o" // [60,80]
mandou uma diferente. O mínimo é 7 - 1 (uma diferente)
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
    let answerOfTom = "oooooooooo";
    let scoreOfTom = 100;
    let answerOfJohn = "oooooooooo"; 
    console.log(possibleScores(answerOfTom, scoreOfTom, answerOfJohn)) //[100,100]
  },

  test5() {
    let answerOfTom = "oooooooooo";
    let scoreOfTom = 100;
    let answerOfJohn = "xxxxxxxxxx"; 
    console.log(possibleScores(answerOfTom, scoreOfTom, answerOfJohn)) //[0,0]
  },

  test6() {
    /*
    min = 100 - 50 = 50
    max = 100 + 50 = 150
    */
    let answerOfTom = "oooooooooo";
    let scoreOfTom = 100;
    let answerOfJohn = "oooooxxxxx"; 
    console.log(possibleScores(answerOfTom, scoreOfTom, answerOfJohn)) //[50,50]
  },

  test7() {
    let answerOfTom = "oooooooooo";
    let scoreOfTom = 50;
    let answerOfJohn = "oooooxxxxx"; 
    console.log(possibleScores(answerOfTom, scoreOfTom, answerOfJohn)) // [0,100]
  },

  test8() {
    let answerOfTom = "oooooooooo";
    let scoreOfTom = 40;
    let answerOfJohn = "oooooxxxxx"; 
    console.log(possibleScores(answerOfTom, scoreOfTom, answerOfJohn)) // [10,90]
  },

  test9() {
    let answerOfTom = "oooooooooo";
    let scoreOfTom = 60;
    let answerOfJohn = "oooooxxxxx"; 
    console.log(possibleScores(answerOfTom, scoreOfTom, answerOfJohn)) // [10,90]
  }
}

Test.test6();


