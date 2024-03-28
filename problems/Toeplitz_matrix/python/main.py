
def isToepliz(lis, n, m):
  endLine = m
  i = 0
  while i < len(lis):
    if endLine > 1:
      if (i + n +1) < len(lis) and lis[i] != lis[i + n + 1]:
        return False
      endLine=endLine-1
    else:
      endLine = m 
    i = i + 1
  return True  
  