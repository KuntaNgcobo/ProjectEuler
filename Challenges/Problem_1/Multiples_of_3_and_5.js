// KuntaNgcobo
// Multiples of 3 and 5 function

const muls = x => {
  return 0.5*x*(x+1);
}

const multiplesOf3and5 = number => {
  let mod3 = number%3;
  let mod5 = number%5;
  let mod15 = number%15;

  let div3 = (mod3 === 0 && number > 0) ? (number - mod3)/3 - 1 : (number - mod3)/3;
  let div5 = (mod5 === 0 && number > 0) ? (number - mod5)/5 - 1 : (number - mod5)/5;
  let div15 = (mod15 === 0 && number > 0) ? (number - mod15)/15 - 1 : (number - mod15)/15;

  //console.log(div3 + ' ' + div5 + ' ' + div15);
  return muls(div3)*3 + muls(div5)*5 - muls(div15)*15
}
