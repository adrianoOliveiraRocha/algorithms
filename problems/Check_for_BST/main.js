'use strict'

function isBST(root) {
  let rData = root.data;
  let lArr = [], rArr = [];

  if(root.left) {
    if(root.data < root.left.data) return false;
    else lArr.push(root.left);  
  }

  if(root.rigth) {
    if(root.data > root.rigth.data) return false;
    else rArr.push(root.rigth);  
  }  
  // analize lArr
  while(lArr.length) {
    let lNode = lArr.pop();
    if(lNode.left) {
      if(lNode.data > lNode.left.data) return false;
      else {
        if(lNode.left.data > rData) return false;
        else {
          lArr.push(lNode.left);
        }
      }  
    }    
  }
  // analize rArr
  //...

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
