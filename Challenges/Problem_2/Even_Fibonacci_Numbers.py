# KuntaNgcobo
# Even Fibonacci Numbers

def fiboEvenSum(n):
  tempEvens = 2
  holderFib = [1, 2]
  
  for i in range(2, n):
    temp = holderFib[1]
    holderFib[1] = holderFib[0] + temp
    holderFib[0] = temp

    tempEvens += holderFib[1] if(holderFib[1]%2 == 0) else 0

  return tempEvens, holderFib;

# print(fiboEvenSum(10))