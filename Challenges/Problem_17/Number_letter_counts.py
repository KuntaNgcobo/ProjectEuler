# KuntaNgcobo
# Number Letter Counts

units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", 
	"ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

tens = ["", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

hundred = "hundred"

thouOrder = ["", "thousand", "million", "billion", "trillion", "quadrillion"]

def word_number(number):
	if(number >= 10**18):
		return "Number Too Large"
	strNumber = str(number)[::-1]
	length = len(strNumber)
	thirdOrder = []


	for i in range(0, length, 3):
		thirdOrder.append( int( strNumber[i : i + 3][::-1] ) )

	word = ""
	for i in range( len(thirdOrder) ):
		temp = ""
		num = thirdOrder[i]

		ten = num%100
		hundreds = num//100
		if(ten < 20):
			temp += units[ten]
		else:
			dunit = ten//10
			unit = ten%10
			temp += tens[dunit - 1] + "" + units[unit]

		if(hundreds > 0):
			temp = units[hundreds] + "" + hundred + ( "and" if(ten > 0) else "" ) + temp

		word = temp + "" + thouOrder[i] + "" + word

	return word

def numberLetterCounts(limit):
	length = 0
	for i in range(1, limit + 1):
		length += len( word_number(i) )

	return length

def printer(number, wordShow = True):
	if(word_number):
		print(number, word_number( number ), len(word_number( number )))
	else:
		print(number, len(word_number( number )))

print(5, numberLetterCounts(5))

print(150, numberLetterCounts(150))

print(1000, numberLetterCounts(1000))