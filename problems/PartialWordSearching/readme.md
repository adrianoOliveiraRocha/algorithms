https://www.codewars.com/kata/54b81566cd7f51408300022d/train/javascript

Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

The method takes two parameters, the query string and the array of strings to search, and returns an array.

If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

Examples
If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].

Tests
Test.assertSimilar(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"])
Test.assertSimilar(wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"])
Test.assertSimilar(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"]), ["aB", "Abc", "zAB"])
Test.assertSimilar(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"]), ["Empty"])

Error 
Expected: '[\'ab\', \'abc\', \'zab\']', instead got: '[\'Empty\']'