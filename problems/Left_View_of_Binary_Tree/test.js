'use strict'

const leftView = require("./main");
const Node = require('./modules/Node');

const Test = {
  test1() {
    let n1 = new Node(1);
    let n2 = new Node(2);
    let n3 = new Node(3);
    n1.left = n3;
    n1.right = n2;
    console.log(leftView(n1));
  },

  test2() {
    let n10 = new Node(10);
    let n20 = new Node(20);
    let n30 = new Node(30);
    n10.left = n20;
    n10.right = n30;

    let n40 = new Node(40);
    let n60 = new Node(60);
    n20.left = n40
    n20.right = n60;

    let n31 = new Node(31);
    n30.left = n31;
    let n32 = new Node(32);
    n30.right = n32;

    let n33 = new Node(33);
    n32.left = n33;
    console.log(leftView(n10));
  }
}

// Test.test1();
Test.test2();
