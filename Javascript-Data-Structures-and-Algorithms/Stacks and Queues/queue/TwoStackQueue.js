const Stack = require('./../stack/Stack');

const TwoStackQueue = (function() {
  function main() {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }

  main.prototype.enqueue = function(val) {
    this.inbox.push(val);
  }

  main.prototype.dequeue = function() {
    if(this.outbox.isEmpty()) {
      while(!this.inbox.isEmpty()) {
        this.outbox.push(this.inbox.pop());
      }
    }
    return this.outbox.pop();
  }

  return main;
  
})();

module.exports = TwoStackQueue;