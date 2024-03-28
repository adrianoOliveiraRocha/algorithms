'use strict'

const Node = require('./Node');

const DoublyLinkedList = (function() {
  function main() {
    this.head;
    this.tail;
    this.size = 0;
  }

  main.prototype.isEmpty = function() {
    return this.size == 0;
  }

  main.prototype.addAtFront = function(value) {
    console.log(`inserting ${value} at the front`);
    if(!this.head) {
      this.head = new Node(value);
      this.tail = this.head;
      this.size++;
    } else {
      let newNode = new Node(value);
      let currentHead = this.head;
      currentHead.prev = newNode;
      newNode.next = currentHead;
      this.head = newNode;
      this.size++;
    }
  }

  main.prototype.insertAtTail = function(value) {
    console.log(`inserting ${value} in the tail`);
    if(!this.head) {
      this.head = new Node(value);
      this.tail = this.head;
      this.size++;
    } else {
      let newNode = new Node(value);
      let currentTail = this.tail;
      currentTail.next = newNode;
      newNode.prev = currentTail;
      this.tail = newNode;
      this.size++;
    }
  }

  main.prototype.deleteAtHead = function() {
    if(this.head) {
      if(this.head.next) {
        this.head = this.head.next;
        this.size--;
      } else {
        this.head = null;
        this.tail = null;
        this.size--;
      }
    } else {
      console.error("Head not found");
    }
  }

  main.prototype.deleteAtTail = function() {
    if(this.tail) {
      this.tail = this.tail.prev;
      this.size--;
    } else {
      this.head = null;
      this.tail = null;
      this.size--;
    }
  },

  main.prototype.findStartingHead = function(value) {
    let currentHead = this.head;
    while(currentHead) {
      console.log('currentHead value: ', currentHead.data);
      if(currentHead.data == value) {
        return true;
      } else {
        currentHead = currentHead.next;
      }
    }
    return false;
  }

  main.prototype.findStartingTail = function(value) {
    let currentTail = this.tail;
    while(currentTail) {
      console.log('currentTail value: ', currentTail.data);
      if(currentTail.data == value) {
        return true;
      } else {
        currentTail = currentTail.prev;
      }
    }
    return false;
  }

  main.prototype.showAll = function() {
    console.log("Show all");
    let count = this.size;
    let currentNode = this.head;
    while(--count >= 0) {
      if(currentNode) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
      }
    }
  }

  main.prototype.getHead = function() {
    return this.head;
  }

  main.prototype.getTail = function() {
    return this.tail;
  }

  return main;

})();

module.exports = DoublyLinkedList;