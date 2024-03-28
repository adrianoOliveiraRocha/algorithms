'use strict'

const DoublyLinkedList = require('./DoublyLinkedList');

const Test = {
  insertAtTail() {
    console.log('<Test.insertAtTail>')
    let dll = new DoublyLinkedList();
    dll.insertAtTail(45);
    dll.insertAtTail(50);
    dll.insertAtTail(78);
    dll.insertAtTail(522);
    dll.showAll();
    console.log(dll.getHead());
    console.log(dll.getTail());
    console.log('</Test.insertAtTail>')
  },

  addAtFront() {
    console.log('<Test.addAtFront>')
    let dll = new DoublyLinkedList();
    dll.addAtFront(45);
    dll.addAtFront(50);
    dll.addAtFront(78);
    dll.addAtFront(522);
    dll.showAll();
    console.log(dll.getHead().data);
    console.log(dll.getTail().data);
    console.log('</Test.addAtFront>')
  },

  deleteAtHead() {
    console.log('<Test.deleteAtHead>')
    console.log("***inserting at the front***");
    let dll = new DoublyLinkedList();
    dll.addAtFront(45);
    dll.addAtFront(50);
    dll.addAtFront(78);
    dll.addAtFront(522);
    dll.showAll();
    dll.deleteAtHead();
    console.log("Head deleted");
    dll.showAll();
    dll.deleteAtHead();
    console.log("Head deleted");
    dll.showAll();
    dll.deleteAtHead();
    console.log("Head deleted");
    dll.showAll();
    dll.deleteAtHead();
    console.log("Head deleted");
    dll.showAll();
    dll.deleteAtHead();
    console.log("Head deleted");
    dll.showAll();
    console.log("/n")
    console.log("***inserting at the tail***")
    dll = null;
    dll = new DoublyLinkedList();
    dll.insertAtTail(45);
    dll.insertAtTail(50);
    dll.insertAtTail(78);
    dll.insertAtTail(522);
    dll.showAll();
    dll.deleteAtHead();
    console.log("Head deleted");
    dll.showAll();
    dll.deleteAtHead();
    console.log("Head deleted");
    dll.showAll();
    dll.deleteAtHead();
    console.log("Head deleted");
    dll.showAll();
    dll.deleteAtHead();
    console.log("Head deleted");
    dll.showAll();
    dll.deleteAtHead();
    console.log("Head deleted");
    dll.showAll();
    console.log('</Test.deleteAtHead>');
  },

  deleteAtTail() {
    console.log('<Test.deleteAtTail>');
    console.log("***inserting at the front***");
    let dll = new DoublyLinkedList();
    dll.addAtFront(45);
    dll.addAtFront(50);
    dll.addAtFront(78);
    dll.addAtFront(522);
    dll.showAll();
    dll.deleteAtTail();
    console.log("Tail deleted");
    dll.showAll(); 
    console.log("\n");
    dll = null;
    console.log("***inserting at the tail***");
    dll = new DoublyLinkedList();
    dll.insertAtTail(45);
    dll.insertAtTail(50);
    dll.insertAtTail(78);
    dll.insertAtTail(522);
    dll.showAll();
    dll.deleteAtTail();
    console.log("Tail deleted");
    dll.showAll();    
    console.log('</Test.deleteAtTail>');
  },

  findStartingHead() {
    console.log("<Test.findStartingHead>");
    let dll = new DoublyLinkedList();
    dll.addAtFront(45);
    dll.addAtFront(50);
    dll.addAtFront(78);
    dll.addAtFront(522);
    dll.showAll();
    let value = 78;
    dll.findStartingHead(value) 
      ? console.log("Yeahh! The node whith the value " + value + " exists")
      : console.log("Not found!");
    console.log("</Test.findStartingHead>");
  },

  findStartingTail() {
    console.log("<Test.findStartingTail>");
    let dll = new DoublyLinkedList();
    dll.addAtFront(45);
    dll.addAtFront(50);
    dll.addAtFront(78);
    dll.addAtFront(522);
    dll.showAll();
    let value = 522;
    dll.findStartingTail(value) 
      ? console.log("Yeahh! The node whith the value " + value + " exists")
      : console.log("Not found!");
    console.log("</Test.findStartingTail>");
  }
}
Test.findStartingHead();
Test.findStartingTail();
