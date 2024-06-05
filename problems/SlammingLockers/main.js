// Error: Execution Timed Out (12000 ms)
function lockerRun(lockers){
  let lObj = {}, openned = []  
  let jump = 1
  while(jump <= lockers) {
    for(let i = jump; i <= lockers; i += jump) {
      if(jump == 1) {
        lObj[i] = true
        openned.push(i)
      } else {
        if(lObj[i] == true) {
          lObj[i] = false
          removeItemOnce(i);
        }
        else {
          lObj[i] = true
          openned.push(i)
        }
      }      
    }
    jump++
  }

  function removeItemOnce(value) {
    var index = openned.indexOf(value);
    if (index > -1) {
      openned.splice(index, 1);
    }
  }
  return openned
}

module.exports = lockerRun