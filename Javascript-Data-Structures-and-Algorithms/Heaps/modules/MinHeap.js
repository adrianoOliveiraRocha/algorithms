'use strict'
const Heap = require('./Heap');

function MinHeap() {
  this.items = [];
}
// Inherit
MinHeap.prototype = Object.create(Heap.prototype);

MinHeap.prototype.add = function(item) {
  this.items[this.items.length] = item;
  this.bubbleUp();
}

MinHeap.prototype.poll = function() { // head
  let item = this.items[0];
  this.items[0] = this.items[this.items.length - 1];
  this.items.pop();
  this.bubbleDown();
  return item;
}

MinHeap.prototype.bubbleDown = function() {
  let index = 0;
  while(this.leftChild(index) && this.leftChild(index) < this.items[index]) {
    let smallerIndex = this.leftChildIndex(index);
    if(this.rightChild(index) 
      && this.rightChild(index) < this.items[smallerIndex]) {
      // if right is smaller, right swaps
      smallerIndex = this.rightChildIndex(index);
    }
    this.swap(smallerIndex, index);
    index = smallerIndex;
  }
}

MinHeap.prototype.bubbleUp = function() {
  let index = this.items.length - 1;
  while(this.parent(index) && this.parent(index) > this.items[index]) {
    this.swap(this.parentIndex(index), index);
    index = this.parentIndex(index);
  }
}


module.exports = MinHeap;