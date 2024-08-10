'use strict'
/*
My code is ok. The test return:
Suggest Feedback
Compilation Completed
For Input: 
2 1 3
Your Output: 
Runtime Error 
Hangup (SIGHUP)
/home/guest/sandbox/Solution.js:118
    let rData = root.data;
        ^^^^^
SyntaxError: Unexpected identifier 

Aí dentu fi de rapariga

*/
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
  while(lArr.length) { // ok
    let lNode = lArr.pop();
    if(lNode.left) {
      if(lNode.data < lNode.left.data) return false;
      else {
        if(lNode.left.data > rData) return false;
        else {
          lArr.push(lNode.left);
        }
      }  
    } 

    if(lNode.rigth) {
      if(lNode.data > lNode.rigth.data) return false;
      else {
        if(lNode.rigth.data > rData) return false;
        else {
          lArr.push(lNode.left);
        }
      }
    }    
  }
  // analize rArr
  while(rArr.length) {
    let rNode = rArr.pop();
    if(rNode.rigth) {
      if(rNode.data > rNode.rigth.data) return false;
      else {
        if(rNode.rigth.data < rData) {
          return false;
        }
        else {
          rArr.push(rNode.rigth);
        }
      }  
    }

    if(rNode.left) {
      if(rNode.data > rNode.left.data) return false;
      else {
        if(rNode.left.data < rData) return false;
        else {
          rArr.push(rNode.left);
        }
      }
    }    
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
