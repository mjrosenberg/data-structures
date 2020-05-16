
// Instantiate a new graph
var Graph = function() {
  this.nodes = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < Object.keys(this.nodes).length; i++){
    if (Object.keys(this.nodes)[i] === String(node)){
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //checks each node if it is the value we want to delete
  for(var i = 0; i < Object.keys(this.nodes).length; i++){
    var currKey = Object.keys(this.nodes)[i];
    if(currKey === String(node)){

      delete this.nodes[node];

    } else {
    //if not the value we want, check if this value has an edge to our value and delete
      for (var v = 0; v < this.nodes[currKey].length; v++){
        if (this.nodes[currKey][v] === node){
          this.nodes[currKey].splice(v,1);
        }
      }
    }

  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes[fromNode].length; i++){
    if(this.nodes[fromNode][i] === toNode){
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
 this.nodes[fromNode].push(toNode);
 this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes[fromNode].length; i++){
    if (this.nodes[fromNode][i] === toNode){
      this.nodes[fromNode].splice(i,1);
    }
  }
  for (var i = 0; i < this.nodes[toNode].length; i++){
    if (this.nodes[toNode][i] === fromNode){
      this.nodes[toNode].splice(i,1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes){
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addNode() -> Constant Time
 * contains() -> Linear Time
 * removeNode() -> Quadratic Time
 * hasEdge() -> Linear Time
 * addEdge() -> Constant Time
 * removeEdge() -> Linear Time
 * forEachNode () -> Linear Time
 *
 */


