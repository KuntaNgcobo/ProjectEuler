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
  //let evens = n%2===0 ? n : n-1;
  //n = n%2==0 ? n : n-1;
  //let odds = n;
  let temp = n;
  for(var i = n-1; i > 1; i--){
    //odds=odds*gcd(odds, i);
    let gcdValue = gcd(i, temp);
    if(gcdValue===1){
      temp=temp*i;
      console.log(temp)
    }else if(gcdValue>1){
      temp=temp*(i/gcdValue)
      console.log(temp)
    }
  }
  return temp;
  //return odds*gcd(odds, evens);
}