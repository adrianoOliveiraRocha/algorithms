'use strict'

const SinglyLinkedList = (function() {

  function main() {
    this.top = null;
  } 
  
  main.prototype.addCell = function(cell) {    
    if(!this.top) {
      this.top = cell;
    } else {
      let current = this.top;
      while(current) {
        if(current.next) {
          current = current.next;
        } else {
          current.next = cell;
          return;
        }
      }
    }    
  }

  main.prototype.iterate = function() {
    if(!this.top) {
      console.log("Empty!");
    } else {
      let current = this.top;
      while(current) {
        console.log(current.value);
        current = current.next;
      } 
    }
  }

  main.prototype.findCell = function(value) {
    if(!this.top) {
      console.log("Empty!");
    } else {
      let current = this.top;
      while(current) {
        if(current.value == value) {
          return true;
        } 
        current = current.next;
      } 
      return false;
    }
  } 

  main.prototype.findCellBefore = function(value) {
    if(!this.top) {
      console.log("Empty!");
    } else {
      let current = this.top;
      let before = null;
      while(current) {
        if(current.value == value) {
          if(!before) return 'No cell before';
          else return before.value;
        } 
        before = current;
        current = current.next;
      } 
      return 'Not found';
    }
  }

  main.prototype.addAtBeginning = function(cell) {
    if(!this.top) this.top = cell;
    else {
      let oldTop = this.top;
      this.top = cell;
      this.top.next = oldTop;
    }
  }

  main.prototype.addAtTheEnd = function(cell) {
    if(!this.top) this.top = cell;
    else {
      let current = this.top;
      while(current.next) {
        current = current.next;
      }
      current.next = cell;
    }
  }

  main.prototype.insertCell = function(value, newCell) {
    // Inserting Cells After Other Cells
    if(!this.top) this.top = cell;
    else {
      let current = this.top;
      while(current) {
        if(current.value == value) {
          if(current.next) {  
            let oldNext = current.next;
            newCell.next = oldNext;
            current.next = newCell;
            return;
          } else {
            current.next = newCell; 
          }
        } else {
          current = current.next;
        }
      }
    }

  }

  main.prototype.deleteAfter = function(value) {
    if(!this.top) {
      return "Empty list";
    } else {
      let current = this.top;
      while(current) {
        if(current.value == value) {
          if(!current.next) return "No cell aftre  the target";
          else {
            if(current.next.next) {
              current.next = current.next.next;
              return 'Deleted';
            } else {
              current.next = null;
              return "Deleted";
            }
          }
        } else {
          current = current.next;
        }
      }
    }
  }
 
  return main;

})();

module.exports = SinglyLinkedList;