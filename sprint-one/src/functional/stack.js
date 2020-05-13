var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.storage = storage;
  someInstance.length = 0; //tracks the number of elements in the stack
  someInstance.push = function(value) {
    if (someInstance.length === 0){
      someInstance.length+= 1;
      storage[0] = value;
    } else{
      for (i = someInstance.length; i >= 0; i--){
        var temp = storage[i];
        storage[i+1] = temp;
      }
      someInstance.length+= 1;
      storage[0] = value;
    }
  };

  someInstance.pop = function() {
    var temp = storage[0];
    for (i = 0; i < someInstance.length; i++){
      storage[i] = storage[i+1];
    }
    storage[someInstance.length] = undefined;
    someInstance.length = someInstance.length -1;
    return temp;
  };

  someInstance.size = function() {
    return Math.max(someInstance.length,0);
  };

  return someInstance;
};

