'use strict'

const SinglyLinkedList = (function() {

  function main(top, bottom) {
    this.top = top;
    this.bottom = bottom;
  }

  main.prototype.add = function(cell) {
    if(!this.top) {
      this.top = cell; 
      this.bottom = this.top;
    } else {
      while(this.bottom.next) {
        this.bottom = this.bottom.next
      }
      cell.prev = this.bottom;
      this.bottom.next = cell;       
      this.bottom = this.bottom.next;
    }
  }

  main.prototype.iterateBtoT = function() {
    if(!this.bottom) return "Empty List :(";
    else {
      let sequence = ""
      let current = this.bottom;
      while(current) {
        sequence += `${current.value} `; current = current.prev;
      }
      return sequence;
    } 
  }

  main.prototype.iterateTtoB = function() {
    if(!this.top) return "Empty List :(";
    else {
      let sequence = "";
      let current = this.top;
      while(current) {
        sequence += `${current.value} `; current = current.next;
      }
      return sequence;
    } 
  }

  main.prototype.insertCellAfterMe = function(value, newCell) {
    if(!this.top) {
      this.top = newCell;
    } else {
      let current = this.top;
      let prev = null;
      while(current) {
        if(current.value == value) return; // value already inserted
        else if(value < current.value) {
          if(prev) prev.next = newCell;
          newCell.next = current;
          return;
        } else if(value > current.value) {
          if(current.next) {
            prev = current;
            current = current.next;
          } else {
            current.next = newCell;
          }
        }
      }
    }
  }

  return main;

})();

module.exports = SinglyLinkedList;