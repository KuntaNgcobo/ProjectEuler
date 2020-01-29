// KuntaNgcobo
// 10001st prime

const isPrime = n => {
  if (n % 2 === 0 && n !== 2) {
    return false;
  }

  let factorCap = Math.ceil(Math.sqrt(n)) + 1;
  for (var i = 3; i < factorCap; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const nthPrime = n => {
  let i = 0;
  let counter = 2;
  let prime = 0;
  while(i < n){
    if(isPrime(counter)){
      i++;
      prime = counter;
    }
    counter++
  }
  return prime;
}
