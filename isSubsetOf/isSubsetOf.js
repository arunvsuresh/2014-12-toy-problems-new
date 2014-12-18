/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that both
 * arrays will contain only strings.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain any value,
 * including non-strings.
*/

Array.prototype.isSubsetOf = function(array){
  // Your code here

  var uniqArr = [];
  for (var i = 0; i < this.length; i++) {
  	if (uniqArr.indexOf(i) === -1) {
  		uniqArr.push(this[i]);
  	}
  }
  // loop through input array
  for (var i = 0; i < array.length; i++) {
  	// loop through this
  	for (var j = 0; j < uniqArr.length; j++){
  		if (array.indexOf(uniqArr[j]) === -1) {
  			return false;
  		}
  	}
  	return true;
  }

};


