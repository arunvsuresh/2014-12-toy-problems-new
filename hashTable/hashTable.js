/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 1000;
  for (var i = 0; i < storageLimit; i++) {
    storage.push([]);
  }

  result.insert = function(k, v){
    // TODO: implement `insert()`

    // index
    var index = getIndexBelowMaxForKey(k, storageLimit);

    var bucket = storage[index];

    bucket.push([k, v]);

    // deal with collisions

  };

  result.retrieve = function(k){
    // TODO: implement `retrieve()`

    var index = getIndexBelowMaxForKey(k, storageLimit);

    var bucket = storage[index];

    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return v;
      }
    }

  };

  result.remove = function(k){
    // TODO: implement `remove()`

    var index = getIndexBelowMaxForKey(k, storageLimit);

    var bucket = storage[index];

    var result = null;
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        result = storage.splice(i, 1);
      }
    }
    return result;
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};




// result = {

//   [k, v],
//   [k, v],
//   [k, v]

// }



