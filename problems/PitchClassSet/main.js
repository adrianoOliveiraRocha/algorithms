'use strict'

/*
1 - transposition(T) is simply to add the same number (between 0 and 11) 
  to all elements of the collection.
  A T5 of the set [1, 2, 3] should be [6, 7, 8]

2 - To operate an inversion(I) subtract each element of the list from twelve 
  Note that if one asks for the TnI inversion of some set it means the 
  inversion of the transposition n. Consequently, the TnI of [1,2,3] 
  should be [(12-1)+n, (12-2)+n, (12-3)+n] <=> [0,11,10].

You should create a function that receives a pitch class set (array) 
as first argument and a transposition or inversion operation (string) 
as second argument, formated as "Tn" (transposition n) or "TnI" 
(inversion n) where n is a number between 0 and 12. Below are some examples:

operation([4,6,7,10], "T1");
result = [5,7,8,11]

operation([10,6,7], "T10");
result = [4,5,8] //sorted

operation([4,6,7,10], "T1I");
result = [3,6,7,9] //sorted

operation([10,6,7], "T10I");
result = [0,3,4] //sorted
*/

function operate(pcSet, operation) {
  let result = [];
  // console.log(pcSet)
  if(operation.includes('I')) { // inversion
    
  } else { // transposition
    let n = parseInt(operation.slice(1))
    pcSet.forEach(el => {
      if(el+n < 11) result.push(el+n);
      else result.push((el+11) - 13);
    });
  }  
  return result.sort((a, b) => a-b);
}

module.exports = operate;