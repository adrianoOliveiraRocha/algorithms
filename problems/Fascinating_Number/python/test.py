from main import Solution

class Test:
  def __init__(self):
    self.test1()
    self.test2()
    self.test3()

  def test1(self):
    n = 192
    s = Solution()
    print(s.fascinating(n))
  
  def test2(self):
    n = 853
    s = Solution()
    print(s.fascinating(n))

  def test3(self):
    n = 10492
    s = Solution()
    print(s.fascinating(n))

t = Test()