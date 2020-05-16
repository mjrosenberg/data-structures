var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var ans = false;
  if (this.value === target){ //checks if current value is our target
    return true;
  }

  if (this.children.length > 0){ //checks if current value has children
    for (var i = 0; i < this.children.length; i++){
      ans = this.children[i].contains(target); //sets "ans" to whether or not the value is target & checks children
      if (ans === true){ // if ans gets true, breaks loop and returns
        break;
      }
    }
  }
  return ans;//if ans never goes true, ans returns false because no node/value/child had the target
};



/*
 * Complexity: What is the time complexity of the above functions?
 *  addCHild() => Constant
 *  contains() => O(n)
 */
