// Error: Execution Timed Out (12000 ms)
function lockerRun(lockers){
  let lObj = {}, openned = []  
  let jump = 1
  while(jump <= lockers) {
    for(let i = jump; i <= lockers; i += jump) {
      if(jump == 1) lObj[i] = true
      else {
        if(lObj[i] == true) lObj[i] = false
        else lObj[i] = true
      }      
    }
    jump++
  }

  Object.keys(lObj).forEach(key => {
    if(lObj[key]) openned.push(parseInt(key))
  })  
  return lObj
}

module.exports = lockerRun