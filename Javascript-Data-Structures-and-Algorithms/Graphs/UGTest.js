'use strict'

const UndirectedGraph = require("./modules/UndirectedGraph");

const TestUndirectGraph = {
  addVertex() {
    const g = new UndirectedGraph();
    g.addVertex("A");
    g.addVertex("B");
    g.addVertex("C");
    g.addVertex("D");
    g.addVertex("E");
    g.addVertex("F");
    g.addVertex("G");
    g.addEdge("A", "B", 21);
    g.addEdge("A", "D", 13);
    g.addEdge("B", "C", 22);
    g.addEdge("D", "E", 43);
    g.addEdge("D", "F", 41);
    g.addEdge("E", "G", 50);
    return g 
  },

  removeEdge() {
    let graph = TestUndirectGraph.addVertex();
    console.log(graph);
    
    graph.removeEdge('A', 'B');
    console.log(graph);
  },

  removeVertex() {
    let graph = TestUndirectGraph.addVertex();
    console.log(graph);
    console.log("\n");
    graph.removeVertex('A');
    console.log(graph);
    console.log("\n");
  }

}

TestUndirectGraph.removeVertex();



