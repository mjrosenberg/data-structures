var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};


  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = true;
};

setPrototype.contains = function(item) {
  for (key in this._storage){
    if (key === String(item)){
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  for (key in this._storage){
    if (key === String(item)){
      delete this._storage[key];
    }
  }
};

/*
* Complexity: What is the time complexity of the above functions?
*
* add() -> Constant Time
* contains() -> Linear Time
* remove() -> Linear Time
*
*
*/
