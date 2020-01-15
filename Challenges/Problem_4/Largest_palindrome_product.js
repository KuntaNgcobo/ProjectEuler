// KuntaNgcobo
// Largest palindrome product

const isPalindrome = n => {
  let stringN = n + '';
  let length = stringN.length;
  let minLength = length%2;

  while(stringN.length > minLength){
    let start = stringN.slice(0,1);
    let end = stringN.slice(-1);
    if(start !== end){
      return false;
    }
    stringN = stringN.slice(1, -1)
  }
  return true;
}

const largestPalindromeProduct = (n) => {
  let start = Math.pow(10, n-1) - 1;
  let end = Math.pow(10, n) - 1;
  let largest = [0, 0, 0];
  let i = end;
  let j = end;
  while(i > start){
    while (j > start){
      let number = i*j;
      if(largest[2] + largest[1] < i+j && isPalindrome(number)){
              largest = [number, i, j];
              //break loopj;
              j=start;
      }else{
        j--;
      }
    }
    j=end;
    i--;
    if(i <= largest[2]){
      break;
    }
  }
  return largest[0];
}