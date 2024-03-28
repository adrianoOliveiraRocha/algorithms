class Solution:
  def scores(self, a, b, cc):
    #cc = [0, 0]
    for i in range(len(a)):
      if(a[i] > b[i]):
        cc[0] = cc[0] + 1
      elif(a[i] < b[i]):
        cc[1] = cc[1] + 1

