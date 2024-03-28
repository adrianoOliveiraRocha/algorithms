'use stritc'
const linearSearch = require('./modules/search').linearSearch;
const binarySearch = require('./modules/search').binarySearch;

const Test = {
  testLinearSearch() {
    let n = 45
    let arr = [20, 5, 15, 24, 67, 45, 1, 76, 21, 11]
    console.log(linearSearch(arr, n))
  },

  testBinarySearch() {
    let n = 45
    let arr = [20, 5, 15, 24, 67, 45, 1]
    console.log(binarySearch(arr, n))
  }
}

Test.testLinearSearch();
Test.testBinarySearch();