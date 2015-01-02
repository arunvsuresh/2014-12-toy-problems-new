/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  // TODO: everything


  // set up results var
  var result = 1;

  // if array <= 3 
  if (array.length <= 3) {
  	// loop through array and multiply all items
  	for (var i = 0; i < array.length; i++) {
  		result = result * array[i];
  	}

  }

  else {
	  var sortedArr = array.sort();
	  for (var i = sortedArr.length - 1; i > sortedArr.length - 4; i--) {
	  	result = result * sortedArr[i];
	  }
  }
  // sort the array

  return result;

};