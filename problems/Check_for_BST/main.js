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
      if(node.data == 20) {
        console.log(node.data, node.left);
        console.log(node.data > node.left.data);
      }
      if(node.data < node.left.data) return false;
      else nodeStack.push(node.left);
    };
  }
  return true;
}


module.exports = isBST;


// function isBST0(root) {
//
//   let currentRigth, currentLeft;
//
//   if(root) {
//     if(root.rigth) currentRigth = root.rigth;
//     if(root.left) currentLeft = root.left;
//   } else return 0;
//
//   if(currentLeft && root.data < currentLeft.data) return 0;
//   if(currentRigth && root.data > currentRigth.data) return 0;
//
//   // left
//   while(currentLeft) {
//     if(currentLeft.left && currentLeft.data < currentLeft.left.data) {
//       return 0;
//     } else currentLeft = currentLeft.left;
//   }
//
//   // rigth
//   while(currentRigth) {
//     if(currentRigth.rigth && currentRigth.data > currentRigth.rigth.data) {
//       return 0;
//     } else currentRigth = currentRigth.rigth;
//   }
//
//   return 1;
//
// }
