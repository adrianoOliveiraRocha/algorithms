
class Solution:
  def fascinating(self, n):
    v1 = n * 2
    v2 = n * 3
    c = str(n) + str(v1) + str(v2)
    for i in range(1, 10):
      if(c.count(str(i)) != 1):
        return 'Not Fascinating' 
    return 'Fascinating' 