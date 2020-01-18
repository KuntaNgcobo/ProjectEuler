// KuntaNgcobo
// Smallest Mutliple

const gcd = (n,m) => {
  do{

  if(m%n===1){
    return 1;
  }else if(m%n===0){
    return n;
  }

  let temp = n%m;
  n = m
  m = temp

  }while(true)
}

const smallestMult = n => {
  let temp = n;
  for(var i = n-1; i > n/2; i--){
    let gcdValue = gcd(i, temp);
    if(gcdValue===1){
      temp=temp*i;
    }else if(gcdValue>1){
      temp=temp*(i/gcdValue)
    }
  }

  for(var i = Math.floor(n/2)-1; i > 2; i = i-2){
    let gcdValue = gcd(i, temp);
    if(gcdValue===1){
      temp=temp*i;
    }else if(gcdValue>1){
      temp=temp*(i/gcdValue)
    }
  }
  return temp;
}

