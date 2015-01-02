/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange){
  // check to see if a === b

  var appleKeys = Object.keys(apple);
  var orangeKeys = Object.keys(orange);


  // check to see if keys and values are equal at each juncture

  // check to see if each key contains an object itself
  for (var i = 0; i < appleKeys.length; i++) {
    for (var key in apple) {
      // compare keys and values to see if they match
      if ((typeof apple[key] !== typeof orange[key]) && apple[key] !== orange[key]) {
        // if even one doesn't match, return false
        return false;
      }
    }
  }

  return true;

};