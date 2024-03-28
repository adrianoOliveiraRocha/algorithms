
class Solution:
  def __init__(self):
    # self.test1()
    self.test2()

  def test1(self):
    A = [1, 2, 4, 5, 7]
    B = [5, 6, 3, 4, 8]
    X = 9
    self.allPairs(A, B, len(A), len(B), X)
  
  def test2(self):
    A = [-1, -2, 4, -6, 5, 7]
    B = [6, 3, 4, 0]
    X = 8
    print(A, B, X)
    self.allPairs(A, B, len(A), len(B), X)

  def allPairs(self, A, B, N, M, X):
    pairs = []
    for n in A:
      complement = X - n
      if B.__contains__(complement):
        pair = [n, complement]
        pairs.append(pair)
    
    print(pairs)


Solution()
