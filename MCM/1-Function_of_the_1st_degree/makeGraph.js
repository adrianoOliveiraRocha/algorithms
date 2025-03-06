'use strict'

const MakeGraph = (function() {
  let xArr = [], yArr = [];
  let xAmplitude;
  let yAmplitude;
  let orderedPairs;

  return {
    define(op) {
      orderedPairs = op;
      xAmplitude = orderedPairs[0][0];
      yAmplitude = orderedPairs[orderedPairs.length-1][1];
      for(let pair of orderedPairs) {
        xArr.push(pair[0]); yArr.push(pair[1]);
        if(pair[0] > xAmplitude) {
          xAmplitude = pair[0]
        };
        if(pair[1] > yAmplitude) {
          yAmplitude = pair[1]
        };
      }
    },

    show() {
      for(let y = yAmplitude; y >= -yAmplitude; y--) {    
        let line = '';    
        for(let x = -xAmplitude; x <= xAmplitude; x++) {
          if(this.isItOrderedPair(x, y) && x !== 0 && y !== 0) {
            line += "\t*"
          } else {
            if(x === 0 && y === 0) {
              line += "\t0";  
            } else {
              line += "\t|";
            }            
          }       
        }
        console.log(line);        
      }
    },

    isItOrderedPair(x, y) {
      let res = false;
      for(let pair of orderedPairs) {
        if(pair[0] === x && pair[1] === y) {
          res = true;
        }
      }
      return res;
    }
  }

})();

module.exports = MakeGraph;
