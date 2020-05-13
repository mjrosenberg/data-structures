var Queue = function() {

  this.storage = {};
  this.curr = 0; //tracks the current numeric key
  this.start = 0; //tracks the current front of the keys
};

var queueMethods = {};
Queue.prototype.enqueue = function(value){
  this.storage[this.curr] = value;
  this.curr ++;
};
Queue.prototype.dequeue = function(){
  var temp = this.storage[this.start];
  this.storage[this.start] = undefined;
  this.start ++;
  return temp;
};
Queue.prototype.size = function(){
  return Math.max(this.curr - this.start, 0);
};


