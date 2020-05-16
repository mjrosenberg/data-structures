

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //var bucket = this._storage[index]; this broke this for some reason idk
  if (this._storage[index] === undefined){
    this._storage[index] = [[k,v]];
  } else {
    //loop is check if we need to overwrite a key
    for (var i = 0; i < this._storage[index].length; i++){
      if (this._storage[index][i][0] === k){
        this._storage[index][i][1]= v;
        break;
      }
    }
    this._storage[index].push([k,v]);
  }

  this.count += 1;
  if ((this.count/this._limit) > 0.75){
    console.log("hittin double function")
    this.double();
  }
};

HashTable.prototype.retrieve = function(k) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined){
    return undefined;
  }
  var bucket = this._storage[index];
  console.log("bucket in retrieve: ", bucket);
  for (var i = 0; i < bucket.length; i++){
    if (bucket[i][0] === k){
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  for(let i = 0; i < bucket.length; i++){
    if(bucket[i][0] === k){
      bucket.splice(i, 1);
    }
  }
  this.count -= 1;
  if (this.count/this._limit < .25){
    this.half();
      //shrink the array
  }
};

HashTable.prototype.double = function(){
  var newArray = [];
  var doubleLength = this._limit * 2;
  this._limit = doubleLength;
  for (var i  in this._storage){
    //console.log("in first for loop (showing bucket) " , this._storage[i]);
    let loopcounter = i;
    var bucket = this._storage[i];
    if (!Array.isArray(bucket)){
      break;
    }
    for (j = 0; j < this._storage[i].length; j++){
      //console.log("in second for loop");
      var key = this._storage[i][j][0];
      var value = this._storage[i][j][1];
      var newIndex = getIndexBelowMaxForKey(key, doubleLength);
      //console.log("newIndex: ",newIndex);
      if (newArray[newIndex] === undefined){
        newArray[newIndex] = [[key,value]];
      } else{
        newArray[newIndex].push([key,value]);
      }
    }
  }
this._storage = newArray;
//console.log("end: " ,this._storage)
}

HashTable.prototype.half = function(){
  var newArray = [];
  var halfLength = this._limit / 2;
  this._limit = halfLength;
  for (var i  in this._storage){
    //console.log("in first for loop (showing bucket) " , this._storage[i]);
    let loopcounter = i;
    var bucket = this._storage[i];
    if (!Array.isArray(bucket)){
      break;
    }
    for (j = 0; j < this._storage[i].length; j++){
      //console.log("in second for loop");
      var key = this._storage[i][j][0];
      var value = this._storage[i][j][1];
      var newIndex = getIndexBelowMaxForKey(key, halfLength);
      //console.log("newIndex: ",newIndex);
      if (newArray[newIndex] === undefined){
        newArray[newIndex] = [[key,value]];
      } else{
        newArray[newIndex].push([key,value]);
      }
    }
  }
  this._storage = newArray;
}


/*
* Complexity: What is the time complexity of the above functions?
*
*  insert() -> Worst Case Linear, Most often Case Constant time
*  retrieve() -> Worst Case Linear, Most often Case Constant time
*  remove() -> Worst Case Linear, Most often Case Constant time
*
*/


