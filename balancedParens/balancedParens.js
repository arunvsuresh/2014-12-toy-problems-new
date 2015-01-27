
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
 
var balancedParens = function(string) {

	var matches = {
		'(': ')',
		'{': '}',
		'[': ']'
	};

	var stack = [];

	for (var i = 0; i < string.length; i++) {
		for (var key in matches) {
			if (string[i] === key) {
				stack.push(string[i]);
			}
			if (string[i] === matches[key]) {
				stack.shift(string[i]);
			}
		}
	}

	if (stack.length === 0) {
		return true
	} else {
		return false;
	}

};














	


