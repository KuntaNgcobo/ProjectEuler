# KuntaNgcobo
# Longest_Collatz_sequence

import math

def collatzFormula(n):
	if(n%2 == 0):
		return n/2

	return 3*n + 1

def processor(start):
	counter = 0
	number = start

	while(number > 1):
		temp = math.log(number, 2)
		if(temp == math.trunc(temp)):
			counter += temp
			break

		number = collatzFormula(number)
		counter += 1

	return counter


def longestCollatzSequence(limit):
	maxChain = 0
	maxChainStart = -1
	upperhalf = math.trunc(limit/2)
	lowerhalf = upperhalf - 1 if(upperhalf%2 == 0) else upperhalf

	for i in range(limit, upperhalf, -1):
		if(i%3 == 1 and i%2 == 0):
			continue

		temp = processor(i)
		tempMax = max(maxChain, temp)
		if(maxChain < tempMax):
			maxChain = tempMax
			maxChainStart = i

	for i in range(lowerhalf, 2, -2):
		temp = processor(i)
		tempMax = max(maxChain, temp)
		if(maxChain < tempMax):
			maxChain = tempMax
			maxChainStart = i

	return maxChainStart

'''
print(processor(14))
print(longestCollatzSequence(14))
print(longestCollatzSequence(5847))
print(longestCollatzSequence(46500))
print(longestCollatzSequence(54512))
print(longestCollatzSequence(100000))
'''