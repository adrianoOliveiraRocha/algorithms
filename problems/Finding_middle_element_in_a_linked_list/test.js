'use strict'
const Node = require('./modules/Node')
const getMiddle = require('./main')

const Test = {
  test1() {
    // 1 2 3 4 5
    
    let node5 = new Node()
    node5.data = 5

    let node4 = new Node()
    node4.data = 4
    node4.next = node5
    
    let node3 = new Node()
    node3.data = 3
    node3.next = node4
    
    let node2 = new Node()
    node2.data = 2
    node2.next = node3
    
    let node1 = new Node()
    node1.data = 1
    node1.next = node2

    console.log(getMiddle(node1))
    
  }
}

Test.test1()