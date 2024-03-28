from main import isToepliz

class Test:
  def __init__(self):
    self.test1()
    self.test2()
    self.test3()
  
  def test1(self):
    n = 3
    m = 3
    lis = [6, 7, 8, 4, 6, 7, 1, 4, 6]
    print(isToepliz(lis, n, m))
  
  def test2(self):
    n = 2
    m = 3
    lis = [1, 2, 3, 4, 5, 6]
    print(isToepliz(lis, n, m))
  
  def test3(self):
    n = 3
    m = 11
    lis = [15, 68, 35, 65, 44, 51, 88, 9, 77, 79, 89, 85, 4, 52, 55, 100, 33, 61, 77, 69, 40, 13, 27, 87, 95, 40, 96, 71, 35, 79, 68, 2, 98]
    print(isToepliz(lis, n, m))

Test()