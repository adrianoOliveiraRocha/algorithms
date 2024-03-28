const DirectedGraph = require('./modules/DirectedGraph');

const TestDirectedGraph = {
  addVertex() {
    let dg = new DirectedGraph();
    dg.addVertex("A");
    dg.addVertex("B");
    dg.addVertex("C");
    return dg;
  },

  addEdge() {
    let dg = this.addVertex();
    dg.addEdge("A", "B", 1);
    dg.addEdge("B", "C", 2);
    dg.addEdge("C", "A", 3);
    return dg;
  },

  removeEdge() {
    console.log("removeEdge");
    let dg = this.addEdge();
    console.log(dg);
    dg.removeEdge("A", "B");
    console.log(dg);
  },

  removeVertex() {
    console.log("removeVertex");
    let dg = this.addEdge();
    console.log(dg);
    dg.removeVertex("A");
    console.log(dg);
  },

  traverseBFS() {
    let dg = new DirectedGraph();
    dg.addVertex(42);
    dg.addVertex(41);
    dg.addVertex(50);
    dg.addVertex(10);
    dg.addVertex(40);
    dg.addVertex(45);
    dg.addVertex(75);
    
    dg.addEdge(42, 41, 1);
    dg.addEdge(42, 50, 2);
    dg.addEdge(41, 10, 3);
    dg.addEdge(41, 40, 4);
    dg.addEdge(50, 45, 5);
    dg.addEdge(50, 75, 6);
    dg.traverseBFS(42);
  },

  traverseDFS() {
    let dg = new DirectedGraph();
    dg.addVertex(42);
    dg.addVertex(41);
    dg.addVertex(50);
    dg.addVertex(10);
    dg.addVertex(40);
    dg.addVertex(45);
    dg.addVertex(75);
    
    dg.addEdge(42, 41, 1);
    dg.addEdge(42, 50, 2);
    dg.addEdge(41, 10, 3);
    dg.addEdge(41, 40, 4);
    dg.addEdge(50, 45, 5);
    dg.addEdge(50, 75, 6);

    dg.traverseDFS(42)
  },

  dijkstra() {
    let dg = new DirectedGraph();
    dg.addVertex("A");
    dg.addVertex("B");
    dg.addVertex("C");
    dg.addVertex("D");
    
    dg.addEdge("A", "B", 3);
    dg.addEdge("B", "C", 5);
    dg.addEdge("C", "A", 2);
    dg.addEdge("A", "D", 2);
    
    console.log(dg);
    console.log(dg.dijkstra("A"));
  },

  topologicalSort() {
    let dg = new DirectedGraph();
    dg.addVertex('A');
    dg.addVertex('B');
    dg.addVertex('C');
    dg.addVertex('D');
    dg.addVertex('E');
    dg.addVertex('F');

    dg.addEdge('B', 'A');
    dg.addEdge('D', 'C');
    dg.addEdge('D', 'B');
    dg.addEdge('B', 'A');
    dg.addEdge('A', 'F');
    dg.addEdge('E', 'C');

    console.log(dg);
    let topologicalOrder = dg.topologicalSort();
    console.log(topologicalOrder);
  
  }
}

TestDirectedGraph.topologicalSort();