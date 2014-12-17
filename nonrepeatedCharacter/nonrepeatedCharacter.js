/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  // create an empty string
  // iterate through the input string
  // concat each char into empty string
  // if indexOf currentChar is -1, return it
  var str = '';
  for (var i = 0; i < string.length; i++) {
  	if (str.indexOf(string.charAt(i)) === -1) {
  		str += string.charAt(i);
  	}
  }
  return str[1];
};
