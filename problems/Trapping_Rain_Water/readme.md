https://www.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1?page=1&sprint=a663236c31453b969852f9ea22507634&sortBy=difficulty

Given an array arr[] of N non-negative integers representing the height of blocks. If width of each block is 1, compute how much water can be trapped between the blocks during the rainy season. 
 

Example 1:
Input:
N = 6
arr[] = {3,0,0,2,0,4}
Output:
10
Explanation: 
img/example1.png

Example 2:
Input:
N = 4
arr[] = {7,4,0,9}
Output:
10
Explanation:
Water trapped by above 
block of height 4 is 3 units and above 
block of height 0 is 7 units. So, the 
total unit of water trapped is 10 units.

Example 3:
Input:
N = 3
arr[] = {6,9,9}
Output:
0
Explanation:
No water will be trapped.


class Solution {
  // Function to find the trapped water between the blocks.
  trappingWater(arr, n) {
    if (n <= 2) {
      return 0;
    }

    let leftMax = new Array(n);
    let rightMax = new Array(n);

    leftMax[0] = arr[0];
    for (let i = 1; i < n; i++) {
      leftMax[i] = Math.max(leftMax[i - 1], arr[i]);
    }

    rightMax[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
      rightMax[i] = Math.max(rightMax[i + 1], arr[i]);
    }

    let waterTrapped = 0;
    for (let i = 0; i < n; i++) {
      waterTrapped += Math.min(leftMax[i], rightMax[i]) - arr[i];
    }

    return waterTrapped;
  }
}


