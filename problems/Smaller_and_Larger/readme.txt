https://practice.geeksforgeeks.org/problems/smaller-and-larger4005/1?page=1&sortBy=submissions

Given a sorted array Arr of size N and a value X, find the number of 
array elements less than or equal to X and elements more than or equal 
to X. 

Example 1:
Input:
N = 7, X = 0
Arr[] = {1, 2, 8, 10, 11, 12, 19}
Output: 0 7
Explanation: There are no elements less or
equal to 0 and 7 elements greater or equal
to 0.

Example 2:
Input:
N = 7, X = 5
Arr[] = {1, 2, 8, 10, 11, 12, 19}
Output: 2 5
Explanation: There are 2 elements less or
equal to 5 and 5 elements greater or equal
to 5.
Your Task:
You don't need to read input or print anything. Your task is to complete
 the function getMoreAndLess() which takes the array of integers arr, n 
 and x as parameters and returns an array of size 2. pair denoting the 
 answer. The first value is number of elements less than or equal to x 
 and the second value is number of elements more than or equal to x.

Expected Time Complexity: O(logN)
Expected Auxiliary Space: O(1)

Constraints:
1 ≤ N ≤ 105
0 ≤ X ≤ 106
1 ≤ Arr[i] ≤ 106

