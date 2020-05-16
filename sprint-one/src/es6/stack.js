class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.length = 0;
  }
  push(value){
    if (this.length === 0){
      this.length+= 1;
      this.storage[0] = value;
    } else{
      for (var i = this.length; i >= 0; i--){
        var temp = this.storage[i];
        this.storage[i+1] = temp;
      }
      this.length+= 1;
      this.storage[0] = value;
    }
  }
  pop(){
    var temp = this.storage[0];
    for (var i = 0; i < this.length; i++){
      this.storage[i] = this.storage[i+1];
    }
    this.storage[this.length] = undefined;
    this.length = this.length -1;
    return temp;
  }
  size(){
    return Math.max(this.length, 0);
  }
}