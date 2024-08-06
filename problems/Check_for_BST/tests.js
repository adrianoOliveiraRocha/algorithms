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

  }
}

Tests.test1();
