https://www.codewars.com/kata/59ffd493ba2a14d16f0000d9/train/javascript

Problem

John and Tom are students of Myjinxin.

In the classroom, Myjinxin often gives 10 judgment questions, let the students write the answer. o represents right and x represents wrong. i.e. If the students think that the 10 judgments are all right, his answer will be "oooooooooo".

Tom always answers questions earlier than John. Then, the teacher gives Tom a score, each subject worth 10 points. i.e. If Tom's answer is "oooooooooo" and the correct answer is "ooxxxxxxxx", Tom got 20 points.

John didn't know what the correct answer was. He has his own answer.

John looked at Tom's answer and Tom's score, and he wanted to know what the minimum possible score and the maximum possible score he could get..
Task

You are given three arguments:

    answerOfTom: Tom's answer. It's a string of length 10, contains only o or x.

    scoreOfTom: Tom's score. an integer that can be 0,10,20,...,100.

    answerOfJohn: John's answer. It's a string of length 10, contains only o or x.

Your result should be a 2-elements integer array/tuple: <minimum possible score of John>, <maximum possible score of John>

Still not understand the task? Look at the following example ;-)
Examples

For answerOfTom="oooooooooo", scoreOfTom=20, answerOfJohn="oooooooooo" the output should be 20,20

In this case, John's answer is same as Tom's, so his scores can only be 20.

For answerOfTom="oooooooooo", scoreOfTom=20, answerOfJohn="xxxxxxxxxx" the output should be 80,80

In this case, John's answer is just the opposite of Tom's, so his scores can only be 80.

For answerOfTom="oooooooooo", scoreOfTom=20, answerOfJohn="oooooxxxxx" the output should be 30,70

In this case, Tom's score is 20. It means two questions Tom answered correctly.

Let's think about some situations:

If the first question and second question Tom answered correctly, the whole correct answer may be "ooxxxxxxxx", John will get 70 points;

If the last question and second last question Tom answered correctly, the whole correct answer may be "xxxxxxxxoo", John will get 30 points;

If the 5th question and 6th question Tom answered correctly, the whole correct answer may be "xxxxooxxxx", John will get 50 points;

...and other situations...

So, John can get at least 30 points, at most 70 points.
Note

    Happy Coding ^_^

function possibleScores(aTom, sTom, aJohn) {

  let same = 0;
  
  for (let i = 0; i < aTom.length; i++)
    if (aTom[i] === aJohn[i])
      same += 10;

  const a = 100 - Math.abs(sTom - same);
  const b = Math.abs(100 - sTom - same);
  
  return a > b ? [ b, a ] : [ a, b ];

}

function countDiff(string1, string2) {
    let arr1 = string1.split('');
    let arr2 = string2.split('');
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            count++
        }
    }
    return count;
}

function possibleScores(answerOfTom, scoreOfTom, answerOfJohn) {
    let diff = countDiff(answerOfTom, answerOfJohn);
    let sim = 10 - diff;
    let score = scoreOfTom / 10;
    let min;
    let max;
    if (diff > score) {
        min = diff - score
    }
    else {
        min = score - diff
    };
    if (sim >= score) {
        max = diff + score
    }
    else {
        max = (diff - (score - sim)) + sim
    };

    return [min*10, max*10]
}

function possibleScores(answerOfTom,scoreOfTom,answerOfJohn){
  //coding and coding..
    let diff = 0;
    let min;
    let max;
    for (let i = 0; i < 10; i++) {
        if (answerOfJohn[i] !== answerOfTom[i]) {
            diff += 10;
        }
    }
    diff - scoreOfTom >= 0 ? min = diff - scoreOfTom : min = scoreOfTom - diff;
    diff + scoreOfTom <= 100 ? max = diff + scoreOfTom : max = 100 - (diff + scoreOfTom - 100);
    return [min, max];
}


