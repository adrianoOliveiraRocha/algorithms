const IntegerCell = require('./IntegerCell');
const LinkedList = require('./LinkedList');

const SinglyLinkedListTest = {
  getValues() {
    return [31, 72, 47, 9]
  },

  create() {
    let dll = new LinkedList();

    for(let value of this.getValues()) {
      dll.add(new IntegerCell(value));
    }

    return dll;

  },

  insertCellAfterMe() {
    let dll = this.create();
    console.log("original:");
    console.log(dll.iterateTtoB());
    let newCell = new IntegerCell(13);
    
    let value = 9;
    dll.insertCellAfterMe(value, newCell);
    console.log("\nafter: ", value);
    console.log(dll.iterateTtoB());  
    console.log("\nBottom: " + dll.bottom.value); 
  },

  twoIterations(dll) {
    console.log("iterateBtoT")
    dll.iterateBtoT();
    console.log("iterateTtoB")
    dll.iterateTtoB();
  }
  
}

SinglyLinkedListTest.insertCellAfterMe();
