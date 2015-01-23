
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral){

  // TODO: Implement me!

  var result = 0;
  // split input to get all digits
  var romanDigits = romanNumeral.split('');

  // if (typeof romanNumeral === number || typeof romanNumeral === boolean || typeof romanNumeral === function) {
  // 	return null;
  // }

  // go through digit_values
  //for (var key in DIGIT_VALUES) {
  	// if value of first key is less than value of second key
  	if (romanDigits.length === 1) {
  		return DIGIT_VALUES[romanDigits[0]];
  	}
  	//var inputDigits = {};
  	//debug(romanDigits);
  	for (var i = 1; i <= romanDigits.length; i++) {

  		//inputDigits[romanDigits[i]] = true;
	  	//subtract first from second
	  	//debug(romanDigits[i], romanDigits[i + 1]);
	  	if (DIGIT_VALUES[romanDigits[i - 1]] < DIGIT_VALUES[romanDigits[i]]) {
	  		result = DIGIT_VALUES[romanDigits[i]] - DIGIT_VALUES[romanDigits[i - 1]];
	  		//debug(result);
	  	} 

	  	if (DIGIT_VALUES[romanDigits[i]] <= DIGIT_VALUES[romanDigits[i - 1]]) {
	  		result = DIGIT_VALUES[romanDigits[i]] + DIGIT_VALUES[romanDigits[i - 1]];
	  		//debug(result);
	  	}
  		
  	}

  	return result;
  	
  //}


};

//debug(translateRomanNumeral("IVX")) // 60

