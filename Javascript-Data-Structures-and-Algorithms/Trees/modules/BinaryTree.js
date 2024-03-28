'use strict'

function BinaryTree() {
  this._root = null;
}

BinaryTree.prototype.traversePreOrder = function() {
  // root (the current node), left, right
 traversePreOrderHelper(this._root);

 function traversePreOrderHelper(node) {
  if(!node) return;
  console.log(node.value);
  traversePreOrderHelper(node.left);
  traversePreOrderHelper(node.rigth);
 }

}

BinaryTree.prototype.traversePreOrderIterative = function() {
  // root (the current node), left, right
  let nodeStack = [];
  nodeStack.push(this._root);

  while(nodeStack.length) {
    let node = nodeStack.pop();
    console.log(node.value);
    if(node.rigth) nodeStack.push(node.rigth);
    if(node.left) nodeStack.push(node.left);
  }
}

BinaryTree.prototype.traverseInOrder = function() {
  // left, root (current node), right
  traverseInOrderHelper(this._root);

  function traverseInOrderHelper(node) {
    if(!node) return;
    traverseInOrderHelper(node.left);
    console.log(node.value);
    traverseInOrderHelper(node.rigth);    
  }
}

BinaryTree.prototype.traverseInOrderIterative = function() {
  // left, root (current node), right
  let current = this._root, s = [], done = false;
  while(!done) {
    if(current != null) {
      s.push(current);
      current = current.left;
    } else {
      if(s.length) {
        current = s.pop();
        console.log(current.value);
        current = current.rigth;
      } else {
        done = true;
      }
    }
  }
}

BinaryTree.prototype.traversePostOrder = function() {
  // left, right, root (the current node)
  traversePostOrderHelper(this._root);

  function traversePostOrderHelper(node) {
    if(node.left) traversePostOrderHelper(node.left);
    if(node.rigth) traversePostOrderHelper(node.rigth);
    console.log(node.value);
  }
}

BinaryTree.prototype.traversePostOrderIterative = function() {
  // left, right, root (the current node)
  let s1 = []; s2 = [];
  s1.push(this._root);
  while(s1.length) {
    let node = s1.pop();
    s2.push(node);
    if(node.left) s2.push(node.left);
    if(node.rigth) s2.push(node.rigth);
  }

  while(s2.length) {
    let node = s2.pop();
    console.log(node.value);
  }
}

BinaryTree.prototype.traverseLevelOrder = function() {
  /* this method essentially visits each node level by level 
    instead of going deep into the left or right*/
  let root = this._root, queue = [];

  if(!root) return;
  queue.push(root);

  while(queue.length) {
    let temp = queue.shift();
    console.log(temp.value);
    if(temp.left) queue.push(temp.left);
    if(queue.rigth) queue.push(temp.rigth);
  }
}

//Level-Order Traversal