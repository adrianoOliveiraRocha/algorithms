const Queue = require('./../queue/Queue');

const QueueStack = (function() {
  
  function main() {
    this.inbox = new Queue();
  }

  main.prototype.push = function(val) {
    this.inbox.enqueue(val);
  }

  main.prototype.pop = function() {
    size = this.inbox.array.length - 1;
    let counter = 0;
    let bufferQueue = new Queue();

    while(++counter <= size) {
      bufferQueue.enqueue(this.inbox.dequeue());
    }
    let popped = this.inbox.dequeue();
    this.inbox = bufferQueue;
    return popped;
  }

  main.prototype.showInbox = function() {
    return this.inbox;
  }

  return main;

})();

let stack = new QueueStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.showInbox());
console.log(stack.pop());
console.log(stack.showInbox());

