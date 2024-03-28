const IntegerCell = require('./IntegerCell');
const LinkedList = require('./LinkedList');

const Test = {
  getValues() {
    return [31, 11, 72, 40, 75];
  },

  create() {

    let ssll = new LinkedList();

    for(let value of this.getValues()) {
      ssll.insertCell(new IntegerCell(value));
    }
    
    return ssll;
    
  }, 

  copyList() {
    let ssll = this.create();
    console.log(ssll);
    let copy = ssll.copyList();
    return copy;
  }

}

let copy = Test.create();
console.log(copy);