'use strict'

function getMiddle(node) {
  let currentNode = node
  let elements = []
  while(currentNode) {
    elements.push(currentNode.data);
    currentNode = currentNode.next; 
  }
  if(elements.length % 2 == 0) {
    return elements[Math.ceil(elements.length/2)]
  } else {
    return elements[Math.floor(elements.length/2)]
  }
}

module.exports = getMiddle;