const LFUDoublyLinkedList = require("./LFUDoublyLinkedList");
const LFUNode = require("./LFUNode");

const LFUCache = (function() {

  function main(capacity) {
    this.keys = {};
    this.freq = {};
    this.capacity = capacity;
    this.minFreq = 0;
    this.size = 0;  
  }

  main.prototype.set = function(key, value) {
    let node = this.keys[key];
    if(node == undefined) { // node does not exists
      node = new LFUNode(key, value);
      this.keys[key] = node;
      if(this.size != this.capacity) { // cache is not full
        // insert without deleting
        if(this.freq[1] === undefined) {
          this.freq[1] = new LFUDoublyLinkedList();
        }
        this.freq[1].insertAtHead(node);
        this.size++;
      } else { // capacity is full
        // delete and insert
        let oldTail = this.freq[this.minFreq].removeAtTail();
        delete this.keys[oldTail.key];
        if(this.freq[1] === undefined) {
          this.freq[1] = new LFUDoublyLinkedList();
        }
        this.freq[1].insertAtHead(node);
      }
      this.minFreq = 1;
    } else { // node exists
      let oldFreqCount = node.freqCount;
      node.data = value;
      node.freqCount++;

      this.freq[oldFreqCount].removeNode(node);
      if(this.freq[node.freqCount] === undefined) {
        this.freq[node.freqCount] = new LFUDoublyLinkedList();
      }

      this.freq[node.freqCount].insertAtHead(node);

      if(oldFreqCount == this.minFreq 
        && Object.keys(this.freq[oldFreqCount]).length == 0) {
        this.minFreq++;
      }
    }
  }

  main.prototype.get = function(key) {
    let node = this.keys[key];

    if(node == undefined) {
      return null;
    } else {
      let oldFreqCount = node.freqCount;
      node.freqCount++;
      this.freq[oldFreqCount].removeNode(node);

      if(this.freq[node.freqCount] === undefined) {
        this.freq[node.freqCount] = new LFUDoublyLinkedList();
      }

      this.freq[node.freqCount].insertAtHead(node);

      if(oldFreqCount == this.minFreq 
        && Object.keys(this.freq[oldFreqCount]).length == 0) {
        this.minFreq++;
      }
      return node.data;
    }

  }

  return main;
  
})();

module.exports = LFUCache;