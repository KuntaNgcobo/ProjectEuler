// KuntaNgcobo
// Even Fibonacci Numbers

const fiboEvenSum = n => {
  let tempEvens = 2;
  let holderFib = [1, 2];
  
  for(var i = 2; i < n; i++){
    let temp = holderFib[1];
    holderFib[1] = holderFib[0] + temp;
    holderFib[0] = temp;

    tempEvens += holderFib[1]%2 === 0 ? holderFib[1] : 0;
  }
  return tempEvens;
}