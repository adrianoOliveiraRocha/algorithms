class Solution:
  def __init__(self):
    print('init...')
    a = [2, 8, 5, 4, 1]
    self.minSwaps(a)

  def minSwaps(self, nums):
    size = len(nums)
    i = 0
    current = nums[i]
    swap = 0
    for n in nums:
      copy = nums[i:size]
      print("copy: ", copy)
      m = min(copy)
      if current > m:
        print("current:", current, " n:", m)
        indexMin = copy.index(m)
        nums[indexMin] = current
        nums[i] = m
        swap = swap+1
        print(nums)
        print("\n")
      i = i+1
      current = nums[i]
    print(swap)
      

Solution()
