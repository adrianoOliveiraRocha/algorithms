'use strict'

//Response received but no data was written to STDOUT or STDERR. 
// Aí dentu
function uniquePush(arr, obj) {
  if(!obj.phoneNumber || obj.phoneNumber == undefined) {
    return false;
  }
  // console.log(arr)
  let length = arr.length;
  let unique = true;
  for(let i = 0; i < length; i++) {
    
    if(arr[i].phoneNumber == obj.phoneNumber) {
      unique = false;
      break;
    }
  }
  
  if(unique) {
    arr.push(obj);
    // console.log(arr)
    return true;
  } else {
    return false;
  }
}

module.exports = uniquePush;