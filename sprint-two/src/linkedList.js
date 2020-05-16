var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if(list.tail === null){
      var newNode = Node(value);
      list.tail = newNode;
      list.head = newNode;
    } else{
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    let removeHead = list.head.value;

    var temp = list.head;
    list.head = temp.next;
    return removeHead;
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

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addToTail() => O+1;
 * removeFromTail() => O+1;
 * contains() => O(n)
 *
 */
