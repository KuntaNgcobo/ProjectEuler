# KuntaNgcobo
# Multiples of 3 and 5 function

muls = lambda x : 0.5*x*(x+1)


def multiplesOf3and5(number):
  mod3 = number%3
  mod5 = number%5
  mod15 = number%15

  div3 = number//3 - 1 if(mod3 == 0 and number > 0) else number//3
  div5 = number//5 - 1 if(mod5 == 0 and number > 0) else number//5
  div15 = number//15 - 1  if(mod15 == 0 and number > 0) else number//15

  #print(div3, div5, div15)
  return muls(div3)*3 + muls(div5)*5 - muls(div15)*15