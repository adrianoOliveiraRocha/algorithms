'use strict'

const isBST = require('./main');
const Node = require('./modules/Node');

const Tests = {

  test1() {
    /*
        Input:
       2
     /    \
    1      3
            \
             5
    Output: true
    Explanation:
    The left subtree of every node contains smaller keys and right subtree of every node contains greater. Hence, the tree is a BST.
    */
    let root = new Node(); root.data = 2;

    let n1 = new Node(); n1.data = 1;
    root.left = n1;

    let n3 = new Node(); n3.data = 3;
    root.rigth = n3;

    let n5 = new Node(); n5.data = 5;
    n3.rigth = n5;
    console.log(isBST(root)); // OK
  },

  test2() {
    /*
    Input:
      2
       \
        7
         \
          6
           \
            9
    Output: false
    Explanation:
    Since the node with value 7 has right subtree nodes with keys less than 7, this is not a BST.
    */
    let root = new Node(); root.data = 2;

    let n7 = new Node(); n7.data = 7;
    root.rigth = n7;

    let n6 = new Node(); n6.data = 6;
    n7.rigth = n6;

    let n9 = new Node(); n9.data = 9;
    n6.rigth = n9;
    // console.log(root);

    console.log(isBST(root)); // OK
  },

  test3() {
    /*
    Input:
       10
     /    \
    5      20
          /   \
         9     25
    Output: false
    Explanation: The node is present in the right subtree of 10, but it is smaller than 10.
    */
    let root = new Node(); root.data = 10;

    let n5 = new Node(); n5.data = 5;
    root.left = n5;

    let n20 = new Node(); n20.data = 20;
    root.rigth = n20;

    let n9 = new Node(); n9.data = 9;
    n20.left = n9;

    let n25 = new Node(); n25.data = 25;
    n20.rigth = n25;

    console.log(isBST(root)); //
  }
}

// Tests.test1();
// Tests.test2();
Tests.test3();
