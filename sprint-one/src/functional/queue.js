var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.curr = 0; //tracks the current numeric key
  someInstance.start = 0; //tracks the current front of the keys
  //idk why we wouldn't just use an array with pop/shift
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.curr] = value;
    someInstance.curr ++;
  };

  someInstance.dequeue = function() {
    var temp = storage[someInstance.start];
    storage[someInstance.start] = undefined;
    someInstance.start ++;
    return temp;
  };

  someInstance.size = function() {
    return Math.max(someInstance.curr - someInstance.start, 0);
  };

  return someInstance;
};
