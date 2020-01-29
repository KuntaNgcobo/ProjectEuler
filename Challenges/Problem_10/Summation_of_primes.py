# KuntaNgcobo
# Summation of primes

import math

def isPrime(n):
  if (n % 2 == 0 and n != 2):
    return False
  
  factorCap = math.ceil(math.sqrt(n))+1
  for i in range(3, factorCap, 2): 
    if (n % i == 0):
      return False
  
  return True

def primeSummation(n):
  if(n < 3):
  	return 0

  total = 2
  for i in range(3, n, 2):
    if(isPrime(i)):
      total += i 
 
  return total

print(primeSummation(12))
print(primeSummation(3))
print(primeSummation(2))
print(primeSummation(1))
