// KuntaNgcobo
// Largest_prime_factor
// comment: Solution Not Liked by I

const isPrime = n => {
  if (n % 2 === 0 && n ==! 2) {
    return false;
  }

  let factorCap = Math.ceil(Math.sqrt(n))+1;
  for (var i = 3; i < factorCap; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const largestPrimeFactor = number => {
  if (isPrime(number)) {
    return number;
  }

  let factorCap = number % 2 === 0 ? number / 2 : Math.ceil(number / 3);

  let i = 2;
  while(factorCap >= i){
    if(number % i===0){
      number = number / i;

      if(isPrime(number)){
        return number;
      }
      
    }else{
      i++;
    }
  }
  return 0;
}
