var Queue = function() {
  var someInstance = Object.create(Queue.queueMethods);
  var storage = {};
  someInstance.storage = storage;
  someInstance.curr = 0;
  someInstance.start = 0;

  return someInstance;
};
Queue.queueMethods = {};
var queueMethods = Queue.queueMethods;
queueMethods.enqueue = function(value){
  this.storage[this.curr] = value;
  this.curr ++;
};
queueMethods.dequeue = function(){
  var temp = this.storage[this.start];
  this.storage[this.start] = undefined;
  this.start ++;
  return temp;
};
queueMethods.size = function(){
  return Math.max(this.curr - this.start, 0);
};
