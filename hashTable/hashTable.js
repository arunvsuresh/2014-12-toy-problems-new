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
    
    // use hash function to assign index for bucket
    var index = getIndexBelowMaxForKey(k, storageLimit);

    var bucket = storage[index];

    var tuple;

    var replaced = false;

    for (var i = 0; i < bucket.length; i++) {
      tuple = bucket[i];
      if (tuple[0] === k) {
        tuple[1] = v;
        replaced = true;
        //return;
      }
    }

    if (!replaced) {
      bucket.push([k, v]);
    }




  };

  result.retrieve = function(k){
    // TODO: implement `retrieve()`

    // create an index for the bucket
    var index = getIndexBelowMaxForKey(k, storageLimit);

    // create a bucket
    var bucket = storage[index];

    var tuple;

    // iterate through bucket
    for (var i = 0; i < bucket.length; i++) {
      var tuple;
      // if tuple has key,
      if (tuple[0] === k) {
        // return value
        return tuple[1];
      }
    }

  
  };

  result.remove = function(k){
    // TODO: implement `remove()`

    var index = getIndexBelowMaxForKey(k, storageLimit);

    var bucket = storage[index];

    var tuple;

    for (var i = 0; i < bucket.length; i++) {
      tuple = bucket[i];

      if (tuple[0] === k) {
        delete bucket[i];
      }

    }


    
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



