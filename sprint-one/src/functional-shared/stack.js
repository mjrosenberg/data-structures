var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  var storage = {};

  //someInstance.enqueue = this
  someInstance.storage = storage;
  someInstance.length = 0; //tracks the current numeric key
  //someInstance.start = 0; //tracks the current front of the keys
  // someInstance.pop = queueMethods.push(this);
  // someInstance.push = queueMethods.pop;
  //someInstance.size;
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value){
  if (this.length === 0){
    this.length+= 1;
    this.storage[0] = value;
  } else{
    for (i = this.length; i >= 0; i--){
      var temp = this.storage[i];
      this.storage[i+1] = temp;
    }
    this.length+= 1;
    this.storage[0] = value;
  }
};
stackMethods.pop = function(){
  var temp = this.storage[0];
    for (i = 0; i < this.length; i++){
      this.storage[i] = this.storage[i+1];
    }
    this.storage[this.length] = undefined;
    this.length = this.length -1;
    return temp;
}
stackMethods.size = function(){
  return Math.max(this.length, 0);
}
