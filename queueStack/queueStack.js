/**
 * Write a stack using your preferred instantiation pattern. Once you're done,
 * implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {

  this.storage = [];
  this.counter = 0;

};


// add an item to the top of the stack
Stack.prototype.push = function(value){
  this.storage.push(value);
  this.counter++;
};

// remove an item from the top of the stack
Stack.prototype.pop = function(){
  var poppedItem = this.storage.shift();
  this.counter--;
};

// return the number of items in the stack
Stack.prototype.size = function(){
  return this.counter;
};


/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(value){
    // TODO: implement `enqueue`
    inbox.push(value);
  };

  // called to remove an item from the `queue`
  this.dequeue = function(){
    // TODO: implement `dequeue`
    if (inbox.size() > 0) {
      inbox.splice(0, 1);
    }
  };

  // should return the number of items in the queue
  this.size = function(){
    // TODO: implement `size`
    return inbox.size();
  };
};
