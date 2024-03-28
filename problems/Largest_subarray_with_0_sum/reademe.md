https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1?page=1&sprint=a663236c31453b969852f9ea22507634&sortBy=difficulty

Given an array having both positive and negative integers. The task is to compute the length of the largest subarray with sum 0.

Example 1:
Input:
N = 8
A[] = {15,-2,2,-8,1,7,10,23}
Output: 5
Explanation: The largest subarray with
sum 0 will be -2 2 -8 1 7.

Your Task:
You just have to complete the function maxLen() which takes two arguments an array A and n, where n is the size of the array A and returns the length of the largest subarray with 0 sum.

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(N).

Constraints:
1 <= N <= 105
-1000 <= A[i] <= 1000, for each valid i


1.) Create an array dp of sum of all elements of arr up to the index position.

2.) Starting with the last element of dp and work our way backward.  If the last element is zero, that means the entire arr adds up to zero, and the length of the entire arr is our answer.

3.) If the last element is anything other than zero, then we look for the first occurrance of that element.  The difference in their indexes is the length of the subarray that adds up to zero.

4.) Create a dictionary m with key:numbers in dp, value:their corresponding index for fast loopup of the first occurance of a dp element.  Using a for loop with i as index, the first occurrance would be m[dp[i]], with Time complexity O(1).

Alternatively you could use dp.index(dp[i]), but this is slower with Time complexity O(n).

class Solution:
    def maxLen(self, n, arr):
        if n==1 and arr[0]==0:
            return 1
        dp=[-1]*n
        dp[0]=arr[0]
        m={}
        m[dp[0]]=0
        for i in range(1,n):
            dp[i]=dp[i-1]+arr[i]
            if dp[i] not in m:
                m[dp[i]]=i
        ans=0
        for i in range(n-1,0,-1):
            if dp[i]==0:
                if i+1>ans:
                    ans=i+1
            else:
                if i-m[dp[i]]>ans:
                    ans=i-m[dp[i]]
        return ans



