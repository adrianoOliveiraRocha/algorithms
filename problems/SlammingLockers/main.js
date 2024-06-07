//https://github.com/adrianoOliveiraRocha/algorithms/blob/main/problems/SlammingLockers/main.js

/*
function lockerRun(lockers) {
  let openned = []  
  let jump = 1

  while(jump <= lockers) {
    for(let i = jump; i <= lockers; i+=jump) {
      if(jump == 1) openned.push(i);
      else {
        if(openned.includes(i)) {
          removeItemOnce(i);
        } else {
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
  return openned;
}
*/

function lockerRun(lockers) {
  let open = [];
  for (let i = 1; i * i <= lockers; i++) {
    console.log(i * i)
    open.push(i * i);
  }
  return open;
}

module.exports = lockerRun