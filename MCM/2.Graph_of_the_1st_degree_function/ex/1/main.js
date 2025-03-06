'use strict'

class Solution {
  constructor(s) {
    this.d = 'increasing'
    this.f = s.split("=")[1].replace(/\s/g, '');
    if(this.f[0] == '-') this.d = 'decreasing';
    this.analize();
  }

  fix(n) {
    if(n % 1 == 0) {
      return parseInt(n);
    } else {
      n = parseFloat(n).toFixed(2);
      return parseFloat(n);
    }
  }

  analize(f) {
    let v1 = '', v2 = '', signal = '';
    let signals = ['+', '-'];
    let arriveX = false;
    for(let i = 0; i < this.f.length; i++) {
      if(this.f[i] == 'x') {
        arriveX = true;
      } else {
        if(!arriveX) v1+=this.f[i];
        else if(arriveX) {
          if(signals.includes(this.f[i])) {
            signal = this.f[i];
          } else {
            v2+=this.f[i];
          }
        }
      }
    }
    // console.log(v1, v2, signal);
    this.defineZerorsOfTheFunction(v1, signal, v2);

  }

  defineZerorsOfTheFunction(v1, signal, v2) {
    // define the zeros of the function
    let x = (function () {
      if(signal == "+") return v2 * (-1) / v1;
      else return (v2 / v1);
    })();

    let y0 = [this.fix(x), 0];
    let y = (v1 * 0) + parseInt(v2);
    let x0 = [0, y];
    // x values and y values
    let xV = [0, y0[0]], yV = [x0[1], 0];
    this.makeGrap(xV, yV);
  }

  makeGrap(xV, yV) {
    // get values different of zero
    let choseStepArr = [...xV, ...yV].filter((v) => v != 0);
    let step = Math.abs(choseStepArr[0]) < Math.abs(choseStepArr[1])
    ? Math.abs(choseStepArr[0]) : Math.abs(choseStepArr[1]);
    let amplitude = Math.abs(choseStepArr[0]) > Math.abs(choseStepArr[1])
    ? Math.abs(choseStepArr[0]) : Math.abs(choseStepArr[1]);
    let lines = ""
    for(let y = amplitude; y >= amplitude * -1; y = y - step) {
      let line = ""
      for(let x = amplitude * -1; x <= amplitude; x = x + step) {
        if(x == xV[0] && y == yV[0]) {
          if(x == 0) line += `${y}` + "\t";
          else if(y == 0) line += `${x}` + "\t";
        } else if(x == xV[1] && y == yV[1]) {
          if(x == 0) line += `${y}`  + "\t";
          else if(y == 0) line += `${x}` + "\t";
        } else if(x == 0 && y == 0) {
          line += `0` + "\t";
        } else {
          // console.log(x, y);
          line += `*` + "\t";
        }
      }
      lines += line + "\n";
    }
    console.log(`Result: ${this.d}`);
    console.log(lines);
  }

}

module.exports = Solution;
