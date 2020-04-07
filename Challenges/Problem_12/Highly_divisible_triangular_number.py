# KuntaNgcobo
# Highly_divisible_triangular_number
# comment: Could be more efficient but oh well

import math

def divisibleBy(n):
  if(n < 2):
    return 1
  
  middle = math.sqrt(n)
  middleInt = math.trunc(middle)
  counter = 1 if(middleInt == middle) else 0

  for i in range(1, middleInt):
    if(n%i==0):
      counter += 2
     
  return counter


def triangleNumber(n):
  return n*(n+1)/2


def divisibleTriangleNumber(n):
  divisiblebyn = 0
  counter = n
  while(True):
    divisiblebyn = triangleNumber(counter)
    if( divisibleBy(divisiblebyn) >= n ):
      break
    
    counter += 1
  
  return divisiblebyn

'''
print(divisibleTriangleNumber(5))
print(divisibleTriangleNumber(23))
print(divisibleTriangleNumber(167))
print(divisibleTriangleNumber(374))
print(divisibleTriangleNumber(500))
'''