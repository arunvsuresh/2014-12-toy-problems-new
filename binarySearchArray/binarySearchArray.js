/*
given a sorted array, find the index of an element
using a binary search algorithm.

Test for linear vs binary by applying a data set that
exhibits the desired characteristics.
*/

/**
 * example usage
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
**/

var binarySearch = function(array, element) {

  var minIndex = 0;
  var maxIndex = array.length - 1;
  var currentIndex;
  var currentElement;

  while (minIndex <= maxIndex) {

  	// currentIndex
  	currentIndex = Math.round((minIndex + maxIndex) / 2);

  	// currentElement
  	currentElement = array[currentIndex];

  	if (currentElement < element) {
  		minIndex = currentIndex + 1;
  	}

  	else if (currentElement > element) {
  		maxIndex = currentIndex - 1;
  	}

  	else {
  		return currentIndex;
  	}

  }

  return -1;

}


