# KuntaNgcobo
# Smallest Mutliple

def gcd(n,m):
  while(True):
    if(m%n==1):
      return 1
    elif(m%n==0):
      return n

    temp = n%m
    n = m
    m = temp

def smallestMult(n):
  temp = n
  for i in range(n-1, n//2, -1):
    gcdValue = gcd(i, temp)
    if(gcdValue==1):
      temp=temp*i
    elif(gcdValue>1):
      temp=temp*(i/gcdValue)

  for i in range(n//2-1,2, -2):
    gcdValue = gcd(i, temp)
    if(gcdValue==1):
      temp=temp*i
    elif(gcdValue>1):
      temp=temp*(i/gcdValue)

  return temp
