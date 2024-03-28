const Stack = require('./stack/Stack');

const SortableStack = (function() {

  function main(size) {
    this.size = size;

    this.mainStack = new Stack();
    this.sortedStack = new Stack();

    for(let i = 0; i < this.size; i++) {
      this.mainStack.push(Math.floor(Math.random() * 11));
    }
  }

  main.prototype.sortStackDescending = function() {
    while(!this.mainStack.isEmpty()) {
      let temp = this.mainStack.pop();
      while(!this.sortedStack.isEmpty() && this.sortedStack.peek() < temp) {
        this.mainStack.push(this.sortedStack.pop());
      }
      this.sortedStack.push(temp);
    }
  }

  main.prototype.getMainStack = function() {
    return this.mainStack.getBuffer();
  }

  main.prototype.getSortedStack = function() {
    return this.sortedStack.getBuffer();
  }

  return main;
})();

let ss = new SortableStack(3);
console.log(ss.getMainStack());
console.log(ss.getSortedStack());
console.log("\n");
ss.sortStackDescending();
console.log(ss.getMainStack());
console.log(ss.getSortedStack());