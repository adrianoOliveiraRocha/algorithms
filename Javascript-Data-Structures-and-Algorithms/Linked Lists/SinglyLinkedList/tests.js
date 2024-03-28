'use strict'

const SinglyLinkedList = require('./SinglyLinkedList');

const Test = {
  insert() {
    console.log('<Test.insert>');
    let sll = new SinglyLinkedList();
    sll.insert(45);
    sll.insert(50);
    sll.insert(78);
    sll.insert(522);
    sll.insert(50);
    sll.insert(78);
    // sll.insert(98);
    return sll;        
  },

  remove(value) {
    console.log('<Test.remove>');
    let sll = this.insert();
    sll.showAll();
    console.log("Remove " + value);
    sll.remove(value);
    sll.showAll();
  },

  deleteAtHead() {
    console.log('<Test.deleteAtHead>');
    let sll = this.insert();
    sll.showAll();
    console.log("Delete at head");
    sll.deleteAtHead();
    sll.showAll();
  },

  find(value) {
    console.log('<Test.find>');
    let sll = this.insert();
    sll.showAll();
    sll.find(value) 
      ? console.log(value + " exists in the list")
      : console.log(value + " don't exists in the list");
  },

  reverse() {
    let sll = this.insert();
    console.log("Actual sequnce: ");
    sll.showAll();
    console.log("Reversed: ");
    let head = sll.reverse();
    let reversedSll = new SinglyLinkedList();
    reversedSll.head = head;
    reversedSll.size = reversedSll.howMuchNodes();
    reversedSll.showAll();
  },

  deleteDuplicate() {
    console.log("deleteDuplicate");
    let sll = this.insert();
    console.log('Original: ');
    console.log(sll.showAll());
    let dataWhithoutReppetitions = new SinglyLinkedList();
    dataWhithoutReppetitions.head = sll.deleteDuplicate();
    dataWhithoutReppetitions.size = dataWhithoutReppetitions.howMuchNodes();
    console.log("No repetitions: ");
    dataWhithoutReppetitions.showAll();
  },

  deleteDuplicateInUnsortedSllBest() {
    console.log("deleteDuplicateInUnsortedSllBest");
    let sll = this.insert();
    console.log('Original: ');
    console.log(sll.showAll());
    let dataWhithoutReppetitions = new SinglyLinkedList();
    dataWhithoutReppetitions.head = sll.deleteDuplicateInUnsortedSllBest();
    dataWhithoutReppetitions.size = dataWhithoutReppetitions.howMuchNodes();
    console.log("No repetitions: ");
    dataWhithoutReppetitions.showAll();
  }
}

Test.deleteDuplicate();
Test.deleteDuplicateInUnsortedSllBest();

