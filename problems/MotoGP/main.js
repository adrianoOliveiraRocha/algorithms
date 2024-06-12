'use strict'

const gridPosition = (name, position) => {
  let line = Math.ceil(position / 3); 
  let pInLine = (function() {
    if(position % 3 == 0) return 3;
    else return position % 3;
  })();

  let res = `${name} starts from the middle of the 4th row`
  return [line, pInLine];
}

module.exports = gridPosition;