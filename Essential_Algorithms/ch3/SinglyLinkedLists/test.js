const IntegerCell = require('./IntegerCell');
const LinkedList = require('./LinkedList');

const SinglyLinkedListTest = {

  create() {
    let values = [31, 72, 47, 9];

    let sll = new LinkedList();

    for(let value of values) {
      sll.addCell(new IntegerCell(value));
    }
    
    return sll;
  },

  iterate() {
    let sll = this.create();
    sll.iterate();
  },

  findCell() {
    let sll = this.create();
    console.log(sll.findCell(47));
  },

  findCellBefore() {
    let sll = this.create();
    console.log(sll.findCellBefore(47));
  },

  addAtBeginning() {
    let sll = this.create();
    sll.iterate(); console.log("\n");
    let newCell = new IntegerCell(90);
    sll.addAtBeginning(newCell);
    sll.iterate();
  },

  addAtTheEnd() {
    let sll = this.create();
    sll.iterate(); console.log("\n");
    let newCell = new IntegerCell(90);
    sll.addAtTheEnd(newCell);
    sll.iterate();
  },

  insertCell() {
    let sll = this.create();
    sll.iterate(); console.log("\n");
    let newCell = new IntegerCell(90);
    sll.insertCell(47, newCell);
    sll.iterate();
  },

  deleteAfter() {
    let sll = this.create();
    sll.iterate(); 
    console.log(sll.deleteAfter(72));
    sll.iterate();
  }

}

SinglyLinkedListTest.deleteAfter();

//Adding Cells at the Beginning


