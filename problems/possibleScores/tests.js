'use struct'
//<minimum possible score of John>, <maximum possible score of John>
const Test = {
  test1() {
    let answerOfTom = "oooooooooo";
    let scoreOfTom = 20;
    let answerOfJohn = "oooooooooo"; //20,20
  },

  test2() {
    let answerOfTom = "oooooooooo";
    let scoreOfTom = 20;
    let answerOfJohn = "xxxxxxxxxx"; //80,80
  },

  test3() {
    let answerOfTom = "oooooooooo";
    let scoreOfTom = 20;
    let answerOfJohn = "oooooxxxxx"; //30,70
  }
}

Test.test1();