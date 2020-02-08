// KuntaNgcobo
// Summation of primes

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

const primeSummation = n => {
  if(n < 3) return 0;
  let total = 2;

  for(var i = 3; i < n; i += 2){
    if(isPrime(i)){
      total += i; 
    }
  }
  return total;
}
