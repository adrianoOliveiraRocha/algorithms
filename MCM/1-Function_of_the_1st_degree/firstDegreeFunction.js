'use strict'

let FirstDegreeFunction = (function() {
  let xValues;
  let yValues = [];
  let a;
  let b;
  return {
    setA(aValue) {
      a = aValue;
    },

    setB(bValue) {
      b = bValue;
    },

    setXValues(arr) {
      xValues = arr;
      this.makePairs();
    },

    getXvalues() {
      return xValues;
    },

    getYvalues() {
      return yValues;
    },

    makePairs() {
      for(let i = 0; i < xValues.length; i++) {
        yValues[i] = (a * xValues[i]) + b;
      }
    },

    makeGrafic() {
      let hight = this.getYvalues()[this.getYvalues().length - 1];
      let width = this.getXvalues()[this.getXvalues().length - 1];
      for(let y = hight; y >= -hight; y--) {
        let column = ""
        for(let x = (1 - width); x <= width; x++) {
          column += this.getShow(y, x);
        }
        console.log(column, "\n")
      }
    },

    getShow(y, x) {
      let show = "*\t";
      
      if(x == 0 && y == 0) {
        show = `0\t`;
      }

      if(this.getYvalues().includes(y)
      && this.getXvalues().includes(x)) {
        let positionOfx = this.getXvalues().findIndex((element) => element == x);
        if(this.getYvalues()[positionOfx] == y) show = `(${x.toString()}, ${y.toString()})\t`;
      }
      
      return show;

    },

  }
})();


FirstDegreeFunction.setA(4);
FirstDegreeFunction.setB(-2);
FirstDegreeFunction.setXValues([1, 2, 3, 4, 5]);
// console.log(FirstDegreeFunction.getXvalues());
// console.log(FirstDegreeFunction.getYvalues());
console.log("\n");
FirstDegreeFunction.makeGrafic();
