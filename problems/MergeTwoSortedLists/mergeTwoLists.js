'use strict'

const mergeTwoLists = function(list1, list2) {
  let current1 = list1;
  let current2 = list2;
  let arrList = [];
  while(current1 || current2) {
    if(current1 && current2) {
      if(current1.val < current2.val) {
        arrList.push(current1); arrList.push(current2);
      } else {
        arrList.push(current2); arrList.push(current1);
      }      
    } else if(current1 && !current2) {
      arrList.push(current1);
    } else if(current2 && !current1) {
      arrList.push(current2);
    }
    
    current1 = current1.next ? current1.next : null;
    current2 = current2.next ? current2.next : null;
  }
  let header = arrList[0];
  let current = header;
  for(let i = 1; i < arrList.length; i++) {
    current.next = arrList[i];
    current = current.next;
  }
  return header;
};


module.exports = mergeTwoLists;