'use strict'

function BinarySearchTree() {
  this._root = null;
}

BinarySearchTree.prototype.insert = function(value) {
  let thisNode = {left: null, rigth: null, value: value};
  if(!this._root) this._root = thisNode;
  else {
    let currentRoot = this._root;
    while(currentRoot) {
      if(thisNode.value < currentRoot.value) {
        if(!currentRoot.left) {
          currentRoot.left = thisNode;
          break;
        } else currentRoot = currentRoot.left;
      } else if(thisNode.value > currentRoot.value) {
        if(!currentRoot.rigth) {
          currentRoot.rigth = thisNode;
          break;
        } else currentRoot = currentRoot.rigth;
      } else break;
    }
  }
  
}

BinarySearchTree.prototype.remove = function(value) {
  console.log(`delete ${value}`);
  return deleteRecursively(this._root, value);

  function deleteRecursively(root, value) {
    if(!root) return null;
    else if(value < root.value) {
      root.left = deleteRecursively(root.left, value);
    } else if(value > root.value) {
      root.rigth = deleteRecursively(root.rigth, value);
    } else {
      if (!root.left && !root.right) { // no child
        return null;
      } else if(!root.left) { // case 2
        root = root.right;
        return root;
      } else if(!root.rigth) { // case 2
        root = root.left;
        return root;
      } else { // case 3
        let temp = findMin(root.rigth);
        root.value = temp.value;
        root.rigth = deleteRecursively(root.right, temp.value);
        return root;
      }
    }
    return root;
  }

  function findMin(root) {
    while(root.left) {
      root = root.left;
    }
    return root;
  }

}

BinarySearchTree.prototype.findNode = function(value) {
  let currentRoot = this._root;
  let found = false;
  while (currentRoot) {
    if(value < currentRoot.value) currentRoot = currentRoot.left;
    else if(value > currentRoot.value) currentRoot = currentRoot.rigth;
    else {
      found = true; 
      break;
    }
  }
  return found;
}

/*
BinarySearchTree.prototype.removeIterative = function(value) {
  console.log("delete " + value);
  let currentRoot = this._root;
  let prev = currentRoot;
  while(currentRoot) {
    if(value == currentRoot.value) {
      // Case 1: The node has no children.
      if(!currentRoot.left && !currentRoot.rigth) {
        if(currentRoot.value > prev.value) {
          prev.rigth = null;
          break;
        } else if(currentRoot.value < prev.value) {
          prev.left = null;
          break;
        }
      }
      // Case 2.1: The node has one child (left)
      if(currentRoot.left && !currentRoot.rigth) {
        if(currentRoot.value > prev.value) {
          prev.rigth = currentRoot.left;
          break;
        } else if(currentRoot.value < prev.value) {
          prev.left = currentRoot.left;
          break;
        }
      }
      // Case 2.2: The node has one child (rigth)
      if(!currentRoot.left && currentRoot.rigth) {
        if(currentRoot.value > prev.value) {
          prev.rigth = currentRoot.rigth;
          break;
        } else if(currentRoot.value < prev.value) {
          prev.left = currentRoot.rigth;
          break;
        }
      }
      //Case 3: The node has two children
      if(currentRoot.left && currentRoot.rigth) {
        if(currentRoot.value > prev.value) {
          prev.rigth = currentRoot.rigth;
          let moreToLeft = currentRoot.rigth;
          while(moreToLeft.left) {
            moreToLeft = moreToLeft.left;
          }
          moreToLeft.left = currentRoot.left;
          break;
        } else if(currentRoot.value < prev.value) {
          prev.left = currentRoot.rigth;
          let moreToLeft = currentRoot.rigth;
          while(moreToLeft.left) {
            moreToLeft = moreToLeft.left;
          }
          moreToLeft.left = currentRoot.left;
          break;
        }
      }
      
    } else if(value < currentRoot.value) {
      prev = currentRoot;
      currentRoot = currentRoot.left;
    } else if(value > currentRoot.value) {
      prev = currentRoot;
      currentRoot = currentRoot.rigth;
    }
  }
}
*/

BinarySearchTree.prototype.traversePreOrder = function() {
  // root (the current node), left, right
 traversePreOrderHelper(this._root);

 function traversePreOrderHelper(node) {
  if(!node) return;
  console.log(node.value);
  traversePreOrderHelper(node.left);
  traversePreOrderHelper(node.rigth);
 }

}

BinarySearchTree.prototype.traversePreOrderIterative = function() {
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

BinarySearchTree.prototype.traverseInOrder = function() {
  // left, root (current node), right
  traverseInOrderHelper(this._root);

  function traverseInOrderHelper(node) {
    if(!node) return;
    traverseInOrderHelper(node.left);
    console.log(node.value);
    traverseInOrderHelper(node.rigth);    
  }
}

BinarySearchTree.prototype.traverseInOrderIterative = function() {
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

BinarySearchTree.prototype.traversePostOrder = function() {
  // left, right, root (the current node)
  traversePostOrderHelper(this._root);

  function traversePostOrderHelper(node) {
    if(node.left) traversePostOrderHelper(node.left);
    if(node.rigth) traversePostOrderHelper(node.rigth);
    console.log(node.value);
  }
}

BinarySearchTree.prototype.traversePostOrderIterative = function() {
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

BinarySearchTree.prototype.traverseLevelOrder = function() {
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

module.exports = BinarySearchTree;