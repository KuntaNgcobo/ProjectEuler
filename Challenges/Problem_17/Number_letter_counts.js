/// KuntaNgcobo
// Number Letter Counts

let units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", 
	"ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

let tens = ["", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

let hundred = "hundred"

let thouOrder = ["", "thousand", "million", "billion", "trillion", "quadrillion"]

let reverse = str => {return [...str].reverse().join('')}

let word_number = number => {
	if(number >= 10**18){
    return "Number Too Large"
  }

	let strNumber = reverse(number + "")
	let length = strNumber.length
	let thirdOrder = []

	for(var i = 0; i < length; i += 3){
		thirdOrder = thirdOrder.concat( parseInt( reverse(strNumber.substring(i, i + 3) ) ) )
  }

	let word = ""
	for(var i = 0; i < thirdOrder.length; i++){
		let temp = ""
		let num = thirdOrder[i]

		let ten = num%100
		let hundreds = parseInt(num/100)
		
    if(ten < 20){
			temp += units[ten]
    } else {
			let dunit = parseInt(ten/10)
			let unit = ten%10
			temp += tens[dunit - 1] + "" + units[unit]
    }

		if(hundreds > 0){
			temp = units[hundreds] + "" + hundred + ( ten > 0 ? "and" : "" ) + temp
    }

		word = temp + "" + thouOrder[i] + "" + word
	}

	return word
}

let numberLetterCounts = limit => {
	let length = 0
	for(var i = 0; i < limit + 1; i++){
		length += word_number(i).length
	}

	return length
}

console.log(5, numberLetterCounts(5))

console.log(150, numberLetterCounts(150))

console.log(1000, numberLetterCounts(1000))