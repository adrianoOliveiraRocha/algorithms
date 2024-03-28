'use strict'

const LinkedList = (function() {

  function main() {
    this.top = null;
  }

  main.prototype.insertCell = function(newCell) {
    // Crescent order. So the major for back 
    if(!this.top) this.top = newCell;
    else {
      let current = this.top;
      let prev = null;

      while(current) {
        if(current.value == newCell.value) return 'The value exists';
        else if(newCell.value > current.value) {
          if(current.next) {
            prev = current;
            current = current.next;
          } else {
            current.next = newCell;
            return 'done!';
          }
        } else {
          if(prev) prev.next = newCell;
          if(current.value == this.top.value) this.top = newCell;
          newCell.next = current;
          return 'done!';
        }
      }

    }
  },

  main.prototype.iterate = function() {
    if(!this.top) return null;
    else {
      let current = this.top;
      let show = '';
      while(current) {
        show += current.value + ' ';
        current = current.next;
      }
      return show;
    }
  },

  main.prototype.copyList = function() {
    if(!this.top) return 'Empty list!';
    else {
      let newSentinel = new IntegerCell();
      let lastAdded = newSentinel;
      let oldCell = this.top;
      while(oldCell) {
        lastAdded.value = oldCell.value;
        lastAdded.next = new IntegerCell();
        lastAdded = lastAdded.next;       
        oldCell = oldCell.next;
      }
      lastAdded.next = null;
      return newSentinel;
    }
  }

  return main;

})();

module.exports = LinkedList;