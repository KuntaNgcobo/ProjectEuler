// KuntaNgcobo
// Special Pythagorean triplet

const a = (x, y) => { return y*y - x*x };
const b = (x, y) => { return 2*x*y };
const c = (x, y) => { return y*y + x*x };

const specialPythagoreanTriplet = n => {
 for(var i = 1; i < n+1; i++){
   for(var j = 1; j < i; j++){
       let diff = n - a(j,i) - b(j,i) - c(j,i);
       if(diff === 0){
           return a(j,i) * b(j,i) * c(j,i)
       }
   }
 }
 return -1;
}

​


