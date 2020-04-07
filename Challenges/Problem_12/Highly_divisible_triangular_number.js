// KuntaNgcobo
// Highly_divisible_triangular_number
// comment: Could be more efficient but oh well

const divisibleBy = n => {
  //console.log("Value n: " + n);
  if(n < 2){
    return 1;
  }

  let middle = Math.sqrt(n);
  let middleInt = Math.trunc(middle);
  let counter = middleInt === middle ? 1 : 0;

  //console.log("Middle value: " + middle);
  for(var i = 1; i <= middleInt; i++){
    if(n%i===0){
      counter += 2;
    }
  }
  return counter;
}

const triangleNumber = n => {
  return n*(n+1)/2;
}

const divisibleTriangleNumber = n => {
  let divisiblebyn = 0;
  let counter = n;
  while(true){
    divisiblebyn = triangleNumber(counter);
    if( divisibleBy(divisiblebyn) >= n ){
      break;
    }
    counter++;
  }
  return divisiblebyn;
}