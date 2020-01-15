# KuntaNgcobo
# Largest palindrome product

import math

def isPalindrome(n):
  stringN = str(n)
  length = len(stringN)
  minLength = length%2

  while(len(stringN) > minLength):
    start = stringN[0]
    end = stringN[-1]
    if(start != end):
      return False
    
    stringN = stringN[1: -1]
  
  return True


def largestPalindromeProduct(n):
  start = pow(10, n-1) - 1
  end = pow(10, n) - 1
  largest = [0, 0, 0]
  i = end
  j = end
  while(i > start):
    while (j > start):
      number = i*j
      if(((largest[2] + largest[1]) < (i+j)) and isPalindrome(number)):
              largest = [number, i, j]
              j=start
      else:
        j=j-1

    j=end
    i=i-1
    if(i <= largest[2]):
      break
  #print(largest)
  return largest[0]

