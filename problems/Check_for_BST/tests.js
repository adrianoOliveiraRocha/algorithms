'use strict'

const isBST = require('./main');
const Node = require('./modules/Node');

const Tests = {
  test1() {
    let root = new Node();
    root.data = 2; 
    let n1 = new Node(); n1.data = 1;
    let n3 = new Node(); n3.data = 3;
    root.left = n1, root.rigth = n3;
    console.log(isBST(root));
  },

  test2() {
    let root = new Node();
    root.data = 2; 

    let n1 = new Node();
    n1.data = 7; 
    root.rigth = n1;

    let n2 = new Node();
    n2.data = 6; 
    n1.rigth = n2;

    let n3 = new Node();
    n3.data = 5; 
    n2.rigth = n3;

    let n4 = new Node();
    n4.data = 9; 
    n3.rigth = n4;

    let n5 = new Node();
    n5.data = 2; 
    n4.rigth = n5;

    let n6 = new Node();
    n6.data = 6; 
    n5.rigth = n6;
    
    console.log(isBST(root));
  },

  test3() {
    
  }
}

// Tests.test1();
Tests.test2();