https://www.codewars.com/kata/5566b0dd450172dfc4000005/train/javascript

Finding length of the sequence

As part of this kata, you need to find the length of the sub-array that begins and ends with the specified number.

For example, if the array arr is [0, -3, 7, 4, 0, 3, 7, 9], finding the length of the sub-array that begins and ends with 7s would return 5.

For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

If there are less or more than two occurrences of the number to search for, return 0.

Test.assertEquals(lengthOfSequence([1, 1], 1), 2, 'Returns two when there are only two elements in the array');
Test.assertEquals(lengthOfSequence([1, 2, 3, 1], 1), 4, 'Returns four for an array of length four and the number to be searched at the boundaries');
Test.assertEquals(lengthOfSequence([-7, 5, 0, 2, 9, 5], 5), 5, 'Returns five');
Test.assertEquals(lengthOfSequence([-7, 6, 2, -7, 4], -7), 4, 'Returns four');




