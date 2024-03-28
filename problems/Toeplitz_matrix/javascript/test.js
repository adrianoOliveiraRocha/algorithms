'use strict'

const Solution = require("./main");

const Test = {
  test1() {
    let N = 3, M = 3;
    let A = [6, 7, 8, 4, 6, 7, 1, 4, 6];
    console.log(new Solution().isToepliz(A, N, M))
  },

  test2() {
    let N = 2, M = 3;
    let A = [1, 2, 3, 4, 5, 6];
    console.log(new Solution().isToepliz(A, N, M))
  },

  test3() {
    // N = lines; M = Columns
    let N = 4, M = 7;
    let A = [6, 4, 6, 7, 3, 0, 0, 10, 6, 4, 6, 7, 3, 0, 2, 10, 6, 4, 6, 7, 3, 3, 2, 10, 6, 4, 6, 7];
    console.log(new Solution().isToepliz(A, N, M))
  },

  test4() {
    let N = 3, M = 11
    let A = [15, 68, 35, 65, 44, 51, 88, 9, 77, 79, 89, 85, 4, 52, 55, 100, 33, 61, 77, 69, 40, 13, 27, 87, 95, 40, 96, 71, 35, 79, 68, 2, 98]
    console.log(new Solution().isToepliz(A, N, M)) // 0
  },
  
  test5() {
    let N = 4, M = 7;
    let A = [
      [
        6, 4, 6, 7,
        3, 0, 0
      ],
      [
        10, 6, 4, 6,
         7, 3, 0
      ],
      [
        2, 10, 6, 4,
        6,  7, 3
      ],
      [
        3, 2, 10, 6,
        4, 6,  7
      ]
    ]
    console.log(new Solution().isToepliz(A, N, M))
  }
}

// Test.test1();
// Test.test2();
// Test.test3();
// Test.test4();
Test.test5();
