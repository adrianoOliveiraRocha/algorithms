'use strict'

const gridPosition = (name, position) => {
  let line = Math.ceil(position / 3); 
  let row = (function() {
    if(position % 3 == 0) return 3;
    else return position % 3;
  })();

  let res = '';
  if(line == 1 && row == 1) {
    res = `${name} starts from pole position`
  } else if(line == 1 && row == 2) {
    res = `${name} starts from the middle of the front row`
  } else if(line != 1 && row == 2) {
    res = `${name} starts from the middle of the ${line}th row`
  } else {
    res = `${name} starts from the row ${row} of the ${line}th row`
  }
  return res;
}

module.exports = gridPosition;