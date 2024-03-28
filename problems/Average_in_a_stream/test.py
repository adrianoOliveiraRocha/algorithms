from main import Solution
def test1():
	arr = [10, 20, 30, 40, 50]
	s = Solution()
	print(s.streamAvg(arr, len(arr)))

def test2():
	arr = [12, 2]
	s = Solution()
	print(s.streamAvg(arr, len(arr)))


test1()
test2()

