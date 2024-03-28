from Solution import Solution

class Test:
  def __init__(self):
    print('init')
    self.test1()

  def test1(self) :
    a = [4, 2, 7]
    b = [5, 6, 3]
    cc = [0, 0]
    print(Solution().scores(a, b, cc))

Test()