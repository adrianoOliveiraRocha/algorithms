https://practice.geeksforgeeks.org/problems/equilibrium-point-1587115620/1?page=1&curated[]=1&sortBy=submissions

Given an array A of n positive numbers. The task is to find the first Equilibrium Point in an array. 
Equilibrium Point in an array is a position such that the sum of elements before it is equal to the sum of elements after it.

Note: Retun the index of Equilibrium point. (1-based index)

Example 1:

Input: 
n = 5 
A[] = {1,3,5,2,2} 
Output: 3 
Explanation:  
equilibrium point is at position 3 
as elements before it (1+3) = 
elements after it (2+2). 
 

Example 2:

Input:
n = 1
A[] = {1}
Output: 1
Explanation:
Since its the only element hence
its the only equilibrium point.
 

Your Task:
The task is to complete the function equilibriumPoint() which takes the array and n as input parameters and returns the point of equilibrium. Return -1 if no such point exists.

Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)

Constraints:
1 <= n <= 106
1 <= A[i] <= 108

function equilibriumPoint(a, n) {
  // your code here
  let sum = 0
  a.forEach(data => sum += data);
  let l = 0
  for(let i = 0 ; i < n ; i++){
    sum -= a[i]
    if(l == sum){
      return i+1
    }
    l += a[i]
  }
  
  return -1
}

