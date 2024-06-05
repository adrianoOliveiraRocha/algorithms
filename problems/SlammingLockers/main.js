/*
Why did my code time out?
Our servers are configured to only allow a certain amount of time 
for your code to execute. In rare cases the server may be taking on 
too much work and simply wasn't able to run your code efficiently 
enough. Most of the time though this issue is caused by inefficient 
algorithms. If you see this error multiple times you should try to 
optimize your code further.
*/
function lockerRun(lockers){
  let openned = []  
  let jump = 1
  while(jump <= lockers) {
    for(let i = jump; i <= lockers; i += jump) {
      if(jump == 1) {
        openned.push(i)
      } else {
        if(openned.includes(i)) {
          removeItemOnce(i)
        } else {
          openned.push(i)
        }
      }      
    }
    console.log("\n")
    console.log(i, openned)
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