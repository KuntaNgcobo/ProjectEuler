# KuntaNgcobo
# Largest_prime_factor
# comment: Solution Not Liked by I

import math

def prime(n):
  if (n % 2 == 0 and n != 2):
    return False
  
  factorCap = math.ceil(math.sqrt(n))+1
  for i in range(3, factorCap, 2): 
    if (n % i == 0):
      return False
  
  return True


def largestPrimeFactor(number):
  if (prime(number)):
    return number

  factorCap = number / 2 if(number % 2 == 0) else math.ceil(number / 3)

  i = 2
  while(factorCap >= i):
    if(number % i==0):
      number = number / i

      if(prime(number)):
        return number
      
    else:
      i += 1 
    
  return 0
