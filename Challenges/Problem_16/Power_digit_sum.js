// KuntaNgcobo
// Power_digit_sum

const powerDigitSum = exponent => {
  let number = 2n;
  let summer = 0;
  for(var i = 1; i < exponent; i++){
    number += number;
  }

  /* Should be, but the firebox console will not allow for that
    let number = BigInt(2)**BigInt(exponent)
  */

  for(let unit of number + ''){
    summer += parseInt(unit);
  } 
  //console.log(summer);
  return summer;
}

/*
console.log(powerDigitSum(15));
console.log(powerDigitSum(128));
console.log(powerDigitSum(1000));
*/