/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 * 
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail.value;   //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
  //fill me in!
  this.list = {};
  this.head = null;
  this.tail = null;

};

//write methods here!

LinkedList.prototype.addToTail = function(value){

	var newNode = this.makeNode(value);

	// if list.head === null
	if (this.head === null) {
		this.head = newNode;
	} 
	if (this.tail === null) {
		this.tail = newNode;
	} else {
		this.tail.next = newNode;
		this.tail = newNode;
	}

};

LinkedList.prototype.removeHead = function(){
	var result = this.head.value;
	this.head.value = this.head.next;
	this.head = null;
	return result;
};

LinkedList.prototype.contains = function(target){
	var currentHead = list.head;
	while (currentHead !== null) {
		if (currentHead.value === target) {
			return true;
		} else {
			currentHead = currentHead.next;
		}
	}
	return false;
};

LinkedList.prototype.makeNode = function(value){
	var node = {};
	node.value = value;
	node.next = null;
	return node;
};

var list = new LinkedList();





