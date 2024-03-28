const DLLNode = require("./DLLNode");

const LRUCache = (function() {

  function main(capacity) {
    this.keys = {};
    this.capacity = capacity;
    this.head = new DLLNode('', null);
    this.tail = new DLLNode('', null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  main.prototype.removeNode = function(node) {
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
  }

  main.prototype.addNode = function(node) {
    let realTail = this.tail.prev;
    realTail.next = node;
    this.tail.prev = node;
    node.prev = realTail;
    node.next = this.tail;
  }

  main.prototype.get = function(key) {
    let node = this.keys[key];
    if(node == undefined) {
      return null;
    } else {
      this.removeNode(node);
      this.addNode(node);
      return node.data;
    }
  }

  main.prototype.set = function(key, value) {
    let node = this.keys[key];
    if(node) {
      this.removeNode(node);
    }

    let newNode = new DLLNode(key, value);
    this.addNode(newNode);
    this.keys[key] = newNode;
    // evict node
    if(Object.keys(this.keys).length > this.capacity) {
      let realHead = this.head.next;
      this.removeNode(realHead);
      delete this.keys[realHead];
    }

  }

  return main;

})();

module.exports = LRUCache;