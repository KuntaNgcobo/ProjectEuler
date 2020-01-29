# KuntaNgcobo
# 10001st prime

import math

def isPrime(n):
  if (n % 2 == 0 and n != 2):
    return False
  
  factorCap = math.ceil(math.sqrt(n)) + 1
  for i in range(3, factorCap, 2): 
    if (n % i == 0):
      return False
  
  return True

def nthPrime(n):
  i = 0
  counter = 2
  prime = 0
  while(i < n):
    if(isPrime(counter)):
      i += 1
      prime=counter
    
    counter += 1
  
  return prime

print(nthPrime(10001))
for i in range(0, 6):
	print(nthPrime(math.pow(10,i)))