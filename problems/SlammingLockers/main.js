// Error: Execution Timed Out (12000 ms)
function lockerRun(lockers){
  let lObj = {}, openned = []  
  let jump = 1
  while(jump <= lockers) {
    for(let i = jump; i <= lockers; i += jump) {
      if(jump == 1) lObj[i] = true
      else {
        if(lObj[i] == true) {
          lObj[i] = false
          //remove
        }
        else {
          lObj[i] = true
        }
      }      
    }
    jump++
  }

  function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  // Object.keys(lObj).forEach(key => {
  //   if(lObj[key]) openned.push(parseInt(key))
  // })  
  return lObj
}

module.exports = lockerRun