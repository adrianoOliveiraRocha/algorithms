'use strict'

const helper = require('./helper');

function DirectedGraph() {
  this.edges = {};
}

DirectedGraph.prototype.addVertex = function(vertex) {
  this.edges[vertex] = {};
} 

DirectedGraph.prototype.addEdge = function(origEdge, destEdge, weight) {
  if(weight === undefined) {
    weight = 0
  }
  this.edges[origEdge][destEdge] = weight;
}

DirectedGraph.prototype.removeEdge = function(origVertex, destVertex) {
  if(this.edges[origVertex] && this.edges[origVertex][destVertex] !== undefined) {
    delete this.edges[origVertex][destVertex];
  }
}

DirectedGraph.prototype.removeVertex = function(vertex) {
  Object.keys(this.edges[vertex]).forEach(adjacent => {
    this.removeEdge(vertex, adjacent);
  })
  delete this.edges[vertex];
}

DirectedGraph.prototype.traverseBFS = function(vertex) {
  // Pesquisa em largura
  let queue = [], visited = {};

  queue.push(vertex);
  
  while(queue.length) {
    vertex = queue.shift();
    if(!visited[vertex]) {    
      visited[vertex] = true;
      console.log(vertex);
      for(let adjacentVertex in this.edges[vertex]) {
        queue.push(adjacentVertex);
      }
    }
  }
  
}

DirectedGraph.prototype.traverseDFS = function(vertex) {
  // Pesquisa em profundidade
  let visited = {};
  this._traverseDFS(vertex, visited);
}

DirectedGraph.prototype._traverseDFS = function(vertex, visited) {
  visited[vertex] = true;
  console.log(vertex);
  for(let adjacentVertex in this.edges[vertex]) {
    if(!visited[adjacentVertex]) {
      this._traverseDFS(adjacentVertex, visited);
    }
  }
}

DirectedGraph.prototype.dijkstra = function(source) {
  // create vertex set Q
  let Q = [], dist = {};
  for(let vertex in this.edges) {
    // unknown distances set to Infinity
    dist[vertex] = Infinity;
    // add v to Q
    Q[vertex] = this.edges[vertex];
  }
  // Distance from source to source init to 0
  dist[source] = 0;
  
  while(!helper._isEmpty(Q)) {
    let u = helper._extractMin(Q, dist); // get the min distance
    // remove u from Q
    delete Q[u];
    // for each neighbor, v, of u:
    // where v is still in Q.
    for(let neighbor in this.edges[u]) {
      // current distance
      let alt = dist[u] + this.edges[u][neighbor];
      // a shorter path has been found
      if(alt < dist[neighbor]) {
        dist[neighbor] = alt;
      }
    }

  }

  return dist;

}

DirectedGraph.prototype.topologicalSortUtil = function(v, visited, stack) {
  visited[v] = true;

  for(let item in this.edges[v]) {
    if(visited.hasOwnProperty(item) == false) {
      this.topologicalSortUtil(item, visited, stack);
    }
  }

  stack.unshift(v);
  
}

DirectedGraph.prototype.topologicalSort = function() {
  let visited = {}, stack = [];

  for(let item in this.edges) {
    if(visited.hasOwnProperty(item) == false) {
      this.topologicalSortUtil(item, visited, stack);
    }
  }
  return stack;
}


module.exports = DirectedGraph;