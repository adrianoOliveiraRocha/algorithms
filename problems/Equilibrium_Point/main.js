'use strict'
// 200 / 210
function equilibriumPoint(a, n) {

  if(a.length == 1) {
    return 1;
  }

  const helper = (position) => {
    let leftSum = 0;
    let rigthSum = 0;
    let count = 0;
    
    while(count < n) {
      if(count < position) {
        leftSum += a[count];
      } else if(count > position) {
        rigthSum += a[count];
      }
      count++
    }
    if(leftSum == rigthSum) return true;
    else return false;
  }
  
  for(let i = 1; i < n; i++) {
    if (helper(i)) {
      return i + 1; break;
    }
  }

  return -1;

}

function equilibriumPoint1(a, n) {
  let rigth = 0
  a.forEach(n => rigth += n);
  let left = 0
  for(let i = 0 ; i < n ; i++){
    rigth -= a[i]
    if(left == rigth){
      return i+1;
    }
    left += a[i];
  }
  
  return -1
}



module.exports = equilibriumPoint1;