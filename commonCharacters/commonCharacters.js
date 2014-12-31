/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing only the unique characters found in both strings, in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */


var commonCharacters = function(string1, string2) {
  // TODO: Your code here!

  var results = '';
  // split both strings
  splitStr1 = string1.split('');
  splitStr2 = string2.split('');

  var storage = {};

  var storage2 = {};

  for (var i = 0; i < splitStr1.length; i++) {
  	storage[splitStr1[i]] = true;
  }

  for (var i = 0; i < splitStr2.length; i++) {
  	storage2[splitStr2[i]] = true;
  }

  for (var keys in storage) {
  	if (keys in storage2) {
  		results += keys;
  	}
  }

  return results;

};