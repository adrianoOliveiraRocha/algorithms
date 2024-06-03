/*
i = 0: open all
i = 1: jump each 1. close wich is openned, open wich is openned
i = 2: jump each 2. close wich is openned, open wich is openned
*/

function lockerRun(lockers){
  let openned = Array.from({length: lockers}, (_, i) => i + 1)
  return openned
}

module.exports = lockerRun