/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  // Your code here

  var result = '';
  var remainder = 0;

  // divide the num after decimal by 10

  if (number % 1 === 0) {
  	result += number + '/1';
  }

  //2.3 = 23/10

  else {
  	remainder = number % 10;
  }



  return result;



};

debug(toFraction(3.0));
//debug(3.0 % 1)
//debug(2.5/0.5);


