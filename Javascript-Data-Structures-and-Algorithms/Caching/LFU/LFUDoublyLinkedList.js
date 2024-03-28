const LFUNode = require('./LFUNode');

const LFUDoublyLinkedList = (function () {
  function main () {
    this.head = new LFUNode('buffer head', null);
    this.tail = new LFUNode('buffer tail', null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  main.prototype.insertAtHead = function(node) {
    node.next = this.head.next;
    this.head.next.prev = node;
    node.prev = this.head;
    this.head = node;
    this.size++;
  }

  main.prototype.removeAtTail = function() {
    let oldTail = this.tail.prev;
    let prev = this.tail.prev;
    if(prev.prev) prev.prev.next = this.tail;
    this.tail.prev = prev.prev;
    this.size--;
    return oldTail;
  }

  main.prototype.removeNode = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size--;
  }

  return main;

})();

module.exports = LFUDoublyLinkedList;