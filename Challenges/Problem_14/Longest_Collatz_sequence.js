// KuntaNgcobo
// Longest_Collatz_sequence

const collatzFormula = n => {
	if(n%2 === 0){
		return n/2;
	}
	return 3*n + 1;
}

const processor = start => {
	let counter = 0;
  let number = start;

  while(number > 1){
    let temp = Math.log2(number);
    if(temp === Math.trunc(number)){
      counter += temp;
      break;
    }

    number = collatzFormula(number);
    counter++;
  }

  return counter;
}


const longestCollatzSequence = limit => {
  let maxChain = 0;
  let maxChainStart = -1;
	let upperhalf = Math.trunc(limit/2);
  let lowerhalf = upperhalf%2 === 0 ? upperhalf - 1 : upperhalf;

  for(var i = limit; i > upperhalf; i--){
    if(i%3 === 1 && i%2 === 0){
      continue;
    }
    let temp = processor(i);
    let tempMax = Math.max(maxChain, temp);
    if(maxChain < tempMax){
      maxChain = tempMax;
      maxChainStart = i;
    }
  }
  
  for(var i = lowerhalf; i > 2; i -= 2){
    let temp = processor(i);
    let tempMax = Math.max(maxChain, temp);
    if(maxChain < tempMax){
      maxChain = tempMax;
      maxChainStart = i;
    }
  }

	return maxChain, maxChainStart;
}

/*
console.log(longestCollatzSequence(14));
console.log(longestCollatzSequence(5847));
console.log(longestCollatzSequence(46500));
console.log(longestCollatzSequence(54512));
console.log(longestCollatzSequence(100000));
*/