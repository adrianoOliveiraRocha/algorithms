const BinarySearchTree = require('./modules/BinarySearchTree');

let bst = new BinarySearchTree();
bst.insert(42);
bst.insert(41);
bst.insert(10);
bst.insert(40);
bst.insert(50);
bst.insert(45);
bst.insert(47);
bst.insert(75);
bst.insert(12);
bst.insert(70);

console.log(bst.findNode(12));