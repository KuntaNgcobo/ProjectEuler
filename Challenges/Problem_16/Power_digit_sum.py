# KuntaNgcobo
# Power_digit_sum

def powerDigitSum(exponent):
	prod = str(2**exponent)
	sums = 0

	for unit in prod:
		sums += int(unit)

	return sums

'''
print(powerDigitSum(15));
print(powerDigitSum(128));
print(powerDigitSum(1000));
'''