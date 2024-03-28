'use strict'
// Success
function flickSwitch(arr){
  let toggle = true, res = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == "flick") toggle = ! toggle;
    res.push(toggle);
  }
  return res;
}

module.exports = flickSwitch;