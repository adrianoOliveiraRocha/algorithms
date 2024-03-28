'use strict'

const Node = require('./Node');

const SinglyLinkedList = (function() {

  function main() {
    this.head = null;
    this.size = 0;
  }

  main.prototype.isEmpty = function() {
    return this.size <= 0;
  } 

  main.prototype.insert = function(value) {
    if(this.head == null) {
      this.head = new Node(value);
    } else {
      let currentNode = this.head;
      this.head = new Node(value);
      this.head.next = currentNode;
    }
    this.size++;
  }

  main.prototype.showAll = function() {
    let count = this.size;
    let currentNode = this.head;
    let show = "";
    while(--count >= 0) {
      show += currentNode.data + "\t";
      currentNode = currentNode.next;
    }
    console.log(show);
  }

  main.prototype.remove = function(value) {
    let count = this.size;
    let currentNode = this.head;
    let previous = null;
    while(--count >= 0) {
      if(currentNode.data == value) {
        if(previous) {
          previous.next = currentNode.next;
          this.size--;
        }
        return 'done';  
      }
      previous = currentNode; 
      currentNode = currentNode.next;
    }
    return 'Not found!';
  }

  main.prototype.deleteAtHead = function() {
    if(this.head) {
      this.head = this.head.next;
      this.size--;
      console.log('Head deleted!');
    }
  }

  main.prototype.find = function(value) {
    if(!this.isEmpty()) {
      let counter = this.size;
      let currentNode = this.head;
      while(--counter >= 0) {
        if(currentNode.data == value) {
          return true;
        }
        currentNode = currentNode.next;
      }
      return false;
    } else {
      console.log("The list is empty");
    }
  }

  main.prototype.howMuchNodes = function() {
    let count = 0;
    if(this.head) {
      let currentNode = this.head;
      count = 1;
      while (currentNode.next) {
        count++;
        currentNode = currentNode.next;
      }
      return count;
    } else {
      return count;
    }    
  }

  main.prototype.reverse = function() {
    let node = this.head;
    let prev = null;
    while(node) {
      let temp = node.next;
      node.next = prev;
      prev = node;
      if(!temp) break;
      node = temp
    }
    return node;
  }

  main.prototype.deleteDuplicate = function() {
    let track = [];
    let temp = this.head;
    // console.log(temp.data)
    let prev = null;

    while(temp) {
      if(track.indexOf(temp.data) >= 0) { // if it is negative, doesn't exists
        prev.next = temp.next;
        this.size--;
      } else {
        track.push(temp.data);
        prev = temp;
      }
      temp = temp.next;
    }   
    // if while stoped, temp is null :/
    return this.head; // here, I have only the data without repetitions. But not the nodes
  }

  main.prototype.deleteDuplicateInUnsortedSllBest = function() {
    let track = {};
    let temp = this.head;
    let prev = null;
    while(temp) {
      if(track[temp.data]) {
        prev.next = temp.next;
        this.size--;
      } else {
        track[temp.data] = true;
        prev = temp;
      }
      temp = temp.next;
    }
    return this.head;
  }

  return main;

})();

module.exports = SinglyLinkedList;
