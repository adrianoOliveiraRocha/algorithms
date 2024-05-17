'use strict'

function uniquePush(arr, obj) {
  let length = arr.length;
  let unique = true;
  for(let i = 0; i < length; i++) {
    if(arr[i].name == obj.name && arr[i].phoneNumber == obj.phoneNumber) {
      unique = false;
      break;
    }
  }
  
  if(unique) {
    arr.push(obj);
    return true;
  } else {
    return false;
  }
}

module.exports = uniquePush;