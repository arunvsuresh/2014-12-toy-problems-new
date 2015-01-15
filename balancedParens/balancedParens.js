
//  * write a function that takes a string of text and returns true if
//  * the parentheses are balanced and false otherwise.
//  *
//  * Example:
//  *   balancedParens('(');  // false
//  *   balancedParens('()'); // true
//  *   balancedParens(')(');  // false
//  *   balancedParens('(())');  // true
//  *
//  * Step 2:
//  *   make your solution work for all types of brackets
//  *
//  * Example:
//  *  balancedParens('[](){}'); // true
//  *  balancedParens('[({})]');   // true
//  *  balancedParens('[(]{)}'); // false
//  *
//  * Step 3:
//  * ignore non-bracket characters
//  * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
//  * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
//  *
//  *
 
// var balancedParens = function(input){

// 	var arr = [];

// 	var parens = '(){}[]';
// 	var parensPos;

// 	var leftParens = '(';
// 	var rightParens = ')';
// 	var parenCount = 0;

// 	var leftBraces = '{';
// 	var rightBraces = '}';
// 	var braceCount = 0;

// 	var leftBrackets = '[';
// 	var rightBrackets = ']';
// 	var bracketCount = 0;


// 	function matching(char1, char2) {
// 		if ()
// 	}
// 	for (var i = 0; i < input.length; i++) {
// 		if (input[i] === leftParens || input[i] === rightParens) {
// 			parenCount++;
// 		}

// 		if (input[i] === leftBraces || input[i] === rightBraces) {
// 			braceCount++;
// 		}

// 		if (input[i] === leftBrackets || input[i] === rightBrackets) {
// 			bracketCount++;
// 		}
// 	}

// 	if ()

// 	for (var i = 0; i < input.length; i++) {
// 		if (input[i] === leftParens || input[i] === leftBraces || input[i] === leftBrackets) {
// 			arr.push(input[i]);
// 		}

// 		else if (input[i] === rightParens || input[i] === rightBraces || input[i] === rightBrackets) {
// 			if (arr.length === 0) {
// 				return false;
// 			}
// 			else {
// 				arr.pop(input[i]);
// 			}
// 		}
// 	// check to see if char is a parens
// 		// check to see if parens match at the end - keep track of index of first encounter of parens
// 			// if parens are same, if parens go right first then left




// };



var balancedParens = function(input) {

	var matches = {
		'(': ')',
		'{': '}',
		'[': ']',
	};

	var arr = [];

	for (var i = 0; i < input.length; i++) {
		if (input[i] === '(' || input[i] === '{' || input[i] === '[') {
			arr.push(input[i]);
		}

		else if (input[i] === ')' || input[i] === '}' || input[i] === ']') {
			if (!hasMatching(arr[arr.length - 1, input[i]])) {
				return false;
			}
		}
	}

	function hasMatching(paren1, paren2) {
		// if paren1 has a closing paren2
		if (paren1 === '(' && paren2 === ')') {
			return true;
		}

		if (paren1 === '{' && paren2 === '}') {
			return true;
		}

		if (paren1 === '[' && paren2 === ']') {
			return true;
		}

		else {
			return false;
		}
	}

}

debug(balancedParens('('));

















	


