
var BinarySearchTree = function(value) {
  let BST = Object.create(BSTMethods);

  BST.value = value;
  BST.left = null;
  BST.right = null;

  return BST;
};

var BSTMethods = {};

// binarySearchTree.insert(5);

BSTMethods.insert = function(value){
  if(value > this.value && this.right === null){
    this.right = BinarySearchTree(value);
  } else if(value > this.value && this.right !== null){
    this.right.insert(value);
  } else if(value < this.value && this.left === null){
    this.left = BinarySearchTree(value);
  } else if(value < this.value && this.left !== null){
    this.left.insert(value);
  }
};

BSTMethods.contains = function(target){
  var ans = false;

  if (this.value === target){ //checks if current value is our target
    return true;
  }

  if (this.left){
    ans = this.left.contains(target); //sets "ans" to whether or not the value is target & checks children
    if (ans === true){ // if ans gets true, breaks loop and returns
      return true;
    }
  }
  if (this.right){
    ans = this.right.contains(target);
    if (ans === true){ // if ans gets true, breaks loop and returns
      return true;
    }
  }


  return ans;
};
//function cb(){};

BSTMethods.depthFirstLog = function(cb){
  cb(this.value);
  if(this.left){
    this.left.depthFirstLog(cb);
  }
  if(this.right){
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
//obj tree { value: node, leftchild: node, rightchild : node}


//        { 3 }
//       /     \
//     [2]      [4]
//     /\        /\
//   [] [0]    []  []

