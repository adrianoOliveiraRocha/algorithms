https://www.geeksforgeeks.org/problems/find-difference-between-sum-of-diagonals1554/1?page=2&sortBy=difficulty

Given a matrix Grid[][] of size NxN. Calculate the absolute difference between the sums of its diagonals.

Example 1:
Input:
N=3
Grid=[[1,2,3],[4,5,6],[7,8,9]]
Output: 0
Explanation:
Sum of primary diagonal = 1+5+9 = 15.
Sum of secondary diagonal = 3+5+7 = 15.
Difference = |15 - 15| = 0.

Example 2:
Input:
N=3
Grid=[[1,1,1],[1,1,1],[1,1,1]]
Output: 0
Explanation:
Sum of primary diagonal = 1+1+1=3.
Sum of secondary diagonal = 1+1+1=3.
Difference = |3-3| = 0.

Your Task:
You don't need to read input or print anything.Your task is to complete the function diagonalSumDifference() which takes an integer N and a 2D array Grid as input parameters and returns the absolutes difference between the sums of its diagonals.


Expected Time Complexity:O(N)
Expected Auxillary Space:O(1)


Constraints:
1<=N<=1000
-1000<=Grid[i][j]<=1000, for 0<=i,j

