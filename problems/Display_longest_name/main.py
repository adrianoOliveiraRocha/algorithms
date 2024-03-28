def getSum(arr, n):
	sum = 0
	for i in range(n):
		sum = sum + arr[i]
	return sum

print(getSum([5, 8, 3, 10, 22, 45], 6))