var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  //set._storage = new Map();
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = true;
  // if (this._storage.has(item)){
  //   return;
  // }

  // this._storage.set(item, true);

};

setPrototype.contains = function(item) {
  for (key in this._storage){
    if (key === String(item)){
      return true;
    }
  }

  //this is for the map
  // for(var key in this._storage.keys()){
  //   if(key === item){
  //     return true
  //   }
  // }

  return false;
  //return this._storage.has(item);
};

setPrototype.remove = function(item) {
  for (key in this._storage){
    if (key === String(item)){
      delete this._storage[key];
    }
  }
};
  //this is for the map
//   for(var key in this._storage.keys()){
//     if(key == item){
//       this._storage.delete(item);
//     }
//   }
// };

/*
* Complexity: What is the time complexity of the above functions?
*
* add() -> Constant Time
* contains() -> Linear Time
* remove() -> Linear Time
*
*
*/
