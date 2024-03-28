'use strict'

const Solution = require("./main")

const Test = {
  test1() {
    let a1 = [11, 1, 13, 21, 3, 7];
    let a2 = [11, 3, 7, 1];
    console.log(new Solution().isSubset(a1, a2, a1.length, a2.length));
  },

  test2() {
    let a1 = [1, 2, 3, 4, 4, 5, 6];
    let a2 = [1, 2, 4];
    console.log(new Solution().isSubset(a1, a2, a1.length, a2.length));
  },

  test3() {
    let a1 = [10, 5, 2, 23, 19];
    let a2 = [19, 5, 3];
    console.log(new Solution().isSubset(a1, a2, a1.length, a2.length));
  },

  test4() {
    let a1 = [1, 2, 3, 4, 5, 6, 7, 8];
    let a2 = [1, 2, 3, 1];
    console.log(new Solution().isSubset(a1, a2, a1.length, a2.length));
  },

  test5() {
    let a1 = [8, 4, 5, 3, 1, 7, 9];
    let a2 = [5, 1, 3, 7, 9];
    console.log(new Solution().isSubset(a1, a2, a1.length, a2.length));
  }
}

Test.test5();
Test.test2();
Test.test3();
Test.test4();