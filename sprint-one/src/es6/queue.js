class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.curr = 0;
    this.start = 0;
  }
  enqueue(value) {
    this.storage[this.curr] = value;
    this.curr ++;
  }

  dequeue() {
    var temp = this.storage[this.start];
    delete this.storage[this.start];
    this.start ++;
    //this.size()++;
    return temp;
  }

  size() {
    return Math.max(this.curr - this.start, 0);
  }

}
