'use strict'

function isBST(root) {
  let nodeStack = [];
  nodeStack.push(root);
  while(nodeStack.length) {
    let node = nodeStack.pop();
    if(node.rigth) {
      if(node.data > node.rigth.data) return false;
      else nodeStack.push(node.rigth);
    }
    if(node.left) {
      if(node.data < node.left.data) return false;
      else nodeStack.push(node.left);
    };
  }
  return true;
}

module.exports = isBST;
