'use static'

function longestCommonSequenceLength(str1, str2) {
  let matrix = Array(str1.length + 1)
  .fill(Array(str2.length + 1)
  .fill(0)), 
  rowLength = str1.length + 1,
  colLength = str2.length + 1,
  max = 0;

  for(let row = 1; row < rowLength; row++) {
    for(let col = 1; col < colLength; col++) {
      let str1Char = str1.charAt(row - 1),
          str2Char = str2.charAt(col - 1);
      if(str1Char == str2Char) {
        matrix[row][col] = matrix[row - 1][col -1] + 1;
        max = Math.max(matrix[row][col], max);
      }
    }
  }
  console.log(matrix);
  return max;
}

console.log(longestCommonSequenceLength('abcd', 'bc'));
