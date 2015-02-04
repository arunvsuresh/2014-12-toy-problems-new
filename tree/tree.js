/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value){

  //tree code goes here!
  var newTree = {};

  newTree.value = value;

  newTree.addChild = treeMaker.methods.addChild;
  newTree.contains = treeMaker.methods.contains;

  newTree.children = [];

  return newTree;

};

//methods go here!
treeMaker.methods = {};

treeMaker.methods.addChild = function(child){

	var child = new treeMaker(child);
	this.children.push(child);

};


treeMaker.methods.contains = function(value){

	var found = false;
	var searchNode = function(node) {
		if (node.value === value) {
			found = true;
			return;
		}

		for (var i = 0; i < node.children.length; i++) {
			searchNode(node.children[i]);
		}
 	}

 	searchNode(this);
 	return found;

};

var tree = treeMaker(4);
tree.addChild(1);
(tree.contains(1));
//tree.addChild(2);
//debug(tree.contains(2));
