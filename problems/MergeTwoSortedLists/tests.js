'use strict'
const ListNode = require('./ListNode');
const mergeTwoLists = require('./mergeTwoLists');

const Tests = {
  testList(header) {
    let current = header;
    console.log(current.val);
    while(current.next) {
      current = current.next;
      console.log(current.val)
    }
  },

  t1() {
    // first list
    let l11 = new ListNode(1, null);
    let l12 = new ListNode(2, null);
    let l14 = new ListNode(4, null);
    l11.next = l12; 
    l12.next = l14;

    // second list
    let l21 = new ListNode(1, null);
    let l23 = new ListNode(3, null);
    let l24 = new ListNode(4, null);
    l21.next = l23; 
    l23.next = l24;
    let header = mergeTwoLists(l11, l21);
    this.testList(header); // Output: [1,1,2,3,4,4]
  },

  t2() {
    let l11 = new ListNode(null, null);
    let l21 = new ListNode(null, null);
    let header = mergeTwoLists(l11, l21);
    this.testList(header); // Output: []
  },

  t3() {
    let l11 = new ListNode(null, null);
    let l21 = new ListNode(0, null);
    let header = mergeTwoLists(l11, l21);
    this.testList(header); // Output: [0]
  }
}

Tests.t1();
Tests.t2();
Tests.t3();
