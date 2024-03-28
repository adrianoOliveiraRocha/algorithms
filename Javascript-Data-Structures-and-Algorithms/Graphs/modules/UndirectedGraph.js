'use strict'

function UndirectedGraph() {
  this.edges = {};
}

UndirectedGraph.prototype.addVertex = function(vertex) {
  this.edges[vertex] = {};
}

UndirectedGraph.prototype.addEdge = function(vertex1, vertex2, weight) {
  if(weight == undefined) {
    weight = 0;
  }
  this.edges[vertex1][vertex2] = weight;
  this.edges[vertex2][vertex1] = weight;
}

UndirectedGraph.prototype.removeEdge = function(vertex1, vertex2) {
  if(this.edges[vertex1] && this.edges[vertex1][vertex2] != undefined) {
    delete this.edges[vertex1][vertex2];
  }

  if(this.edges[vertex2] && this.edges[vertex2][vertex1] != undefined) {
    delete this.edges[vertex2][vertex1];
  }
}

UndirectedGraph.prototype.removeVertex = function(vertex) {
  Object.keys(this.edges[vertex]).forEach(aleatory => {
    this.removeEdge(vertex, aleatory);
  })
  delete this.edges[vertex];
}

UndirectedGraph.prototype.traverseBFS = function(vertex, fn) {
  //Breadth-First Search
  let queue = [];
  let visited = {};
  queue.push(vertex);
  while(queue.length) {
    vertex = queue.shift();
    if(!visited[vertex]) {
      visited[vertex] = true;
      fn(vertex);
      for(let adjacentVertex in this.edges[vertex]) {
        queue.push(adjacentVertex);
      }
    }
  }
}


UndirectedGraph.prototype.traverseDFS = function(vertex, fn) {
  // Depth-First Search
  let visited = {};
  this._traverseDSF(vertex, visited, fn);
}

UndirectedGraph.prototype._traverseDSF = function(vertex, visited, fn) {
  visited[vertex] = true;
  fn(vertex);
  for(let adjacentVertex in this.edges[vertex]) {
    if(!visited[adjacentVertex]) {
      this._traverseDSF(adjacentVertex, visited, fn);
    }
  }
}


module.exports = UndirectedGraph;