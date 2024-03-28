# success
class Solution:
	def streamAvg(self, arr, n):
		s = 0
		r = []
		for i in range(n):
			s = s + arr[i]
			r.append(s/(i+1))
		return r