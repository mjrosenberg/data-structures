var dblLinked = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if(list.tail === null){
      var newNode = Node(value);
      list.tail = newNode;
      list.head = newNode;
    } else{
      //var temp = Node(value) // new node val 2
      var oldTail = list.tail;
      //console.log("Old Tail:" , oldTail)
      list.tail.next = Node(value); // giving original value a next property of our newly added node
      //list.tail.next.previous = list.tail; // newly added node, a previous val of original node
      list.tail = list.tail.next; // move tail pointer to tail
      list.tail.previous = oldTail;
      //console.log('New Tail: ', list.tail)
    }
  };

  list.removeHead = function() {
    var removeHead = list.head.value;
    if (list.head.next === null){
      list.head = list.head.next;
      return removeHead;
    } else{
      list.head.next.previous = null;
      list.head = list.head.next;
      return removeHead;
    }
  };

  list.contains = function(target) {
    let current = list.head;
    while(current !== null){
      if(current.value === target){
        return true;
      }
      current = current.next;
    }
    return false;
  };

  list.addToHead = function(value){
    let newHead = Node(value);
    newHead.next = list.head;
    list.head.previous = newHead;
    list.head = newHead;
    //console.log(list.head.next)
  }
  list.removeTail = function(){
    var removeTail = list.tail.value;
    if (list.tail.previous === null){
      list.tail = list.tail.previous;
      return removeTail;
    } else{
      list.tail.previous.next = null;
      list.tail = list.tail.previous;
      return removeTail;
    }
  }
  return list;
  };



var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
};