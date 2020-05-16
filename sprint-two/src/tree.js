var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  newTree.children = [];
  newTree.parent = null;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
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

treeMethods.removeFromParent = function(){
  for (let i = 0; i < this.parent.children.length; i++){
    if (this.parent.children[i] === this){
      this.parent.children.splice(i,1);
    }
  }
  console.log(this.parent);
  this.parent = null;
}



/*
 * Complexity: What is the time complexity of the above functions?
 *  addChild() => Constant
 *  contains() => O(n)
 */
