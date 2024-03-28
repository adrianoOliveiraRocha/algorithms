https://practice.geeksforgeeks.org/problems/minimum-swaps/1?page=1&sprint=a663236c31453b969852f9ea22507634&sortBy=difficulty


Given an array of n distinct elements. Find the minimum number of swaps required to sort the array in strictly increasing order.


Example 1:
Input:
nums = {2, 8, 5, 4}
Output:
1
Explanation:
swap 8 with 4.

Example 2:
Input:
nums = {10, 19, 6, 3, 5}
Output:
2
Explanation:
swap 10 with 3 and swap 19 with 5.

Your Task:
You do not need to read input or print anything. Your task is to complete the function minSwaps() which takes the nums as input parameter and returns an integer denoting the minimum number of swaps required to sort the array.
If the array is already sorted, return 0. 


Expected Time Complexity: O(nlogn)
Expected Auxiliary Space: O(n)


Constraints:
1 ≤ n ≤ 105
1 ≤ numsi ≤ 106

def minSwaps(self, nums):
    n=len(nums)
    temp=nums.copy()
    temp.sort()
    track=dict()
    for i in range(n):
        track[nums[i]]=i
    swap=0
    for i in range(n):
        if nums[i]!=temp[i]:
            swap+=1
            a,b=nums[i],temp[i]
            nums[i],nums[track[b]]=nums[track[b]],nums[i]
            track[a],track[b]=track[b],track[a]
    return swap


