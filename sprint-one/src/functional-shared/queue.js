var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style
  var someInstance = {};
  var storage = {};
  someInstance.storage = storage;
  someInstance.curr = 0;
  someInstance.start = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};
queueMethods.enqueue = function(value){
  this.storage[this.curr] = value;
  this.curr ++;
};
queueMethods.dequeue = function(){
  var temp = this.storage[this.start];
  this.storage[this.start] = undefined;
  this.start ++;
  return temp;
}
queueMethods.size = function(){
  return Math.max(this.curr - this.start, 0);
}

