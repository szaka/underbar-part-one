(function() {
  'use strict';

  window._ = {};

  // Returns whatever value is passed as the argument. This function doesn't
  // seem very useful, but remember it--if a function needs to provide an
  // iterator when the user does not pass one in, this will be handy.
  _.identity = function(val) {
    /* START SOLUTION */
    return val;
    /* END SOLUTION */
  };

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   *
   *
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {
    /* START SOLUTION */
    var firstArray = [];
    if ( n === 0) {
      return [];
    }
    if ( n > array.length) {
      return array;
    }
    if ( n === undefined) {
      return array[0];
    } else {
      for ( var i = 0; i < n; i++ ) {
        firstArray.push(array[i]);
      }
      return firstArray;
    }
    /* END SOLUTION */
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function(array, n) {
    /* START SOLUTION */
    var lastArray = [];
    if ( n === 0) {
      return [];
    }
    if ( n > array.length) {
      return array;
    }
    if ( n === undefined) {
      return array[array.length-1];
    } else {
      for ( var i = 0; i < n; i++ ) {
        lastArray.push(array[i]);
      }
      return lastArray;
    }
    /* END SOLUTION */
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.
  _.each = function(collection, iterator) {
    /* START SOLUTION */
    if (Array.isArray(collection)){
      for (var i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    } else {
    for (var i in collection){
      iterator(collection[i], i, collection); 
    /* END SOLUTION */
     }
    }
  };
  

// if array iterator(element, index, list)
// if object iterator(value, key, list)


  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target){
    /* START SOLUTION */
    
    for (var i = 0; i < array.length ; i++){
      var count = 0;
      if (array[i] === target){
        count++
        return i;
      }
    }
     if (count === 0){
        return -1;
      }
    /* END SOLUTION */
  };

  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, test) {
    /* START SOLUTION */
    var filterArr = [];
    for (var i = 0; i < collection.length; i++){
    if (test(collection[i]) === true){
      filterArr.push(collection[i])
      }
    }
    return filterArr;
    /* END SOLUTION */
  };

  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, test) {
    /* START SOLUTION */
    var rejectArr = [];
    for (var i = 0; i < collection.length; i++){
    if (test(collection[i]) === false){
      rejectArr.push(collection[i])
      }
    }
    return rejectArr;
    /* END SOLUTION */
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array, isSorted, iterator) {
    /* START SOLUTION */
    var iteratorArr = [];

    if (isSorted === undefined || isSorted === false){
    var uniqArr = [];
    var newObj = {};
    for (var i = 0; i < array.length; i++){
      if (newObj[array[i]] === undefined){
        newObj[array[i]] = 1;
      } else {
        newObj[array[i]]++;
      }
    }
    var keyArr = Object.keys(newObj); 
    for (var k = 0; k < keyArr.length; k++){
      uniqArr.push(Number(keyArr[k]));
     }
    return uniqArr;

  } else if (isSorted === true) {
    var arrayOfIndexes = [array[0]];
    var checkValue = array[0];
    for (var i = 0; i < array.length; i++){
      if (checkValue !== array[i]){
        arrayOfIndexes.push(array[i]);
        checkValue = array[i]; //have array of indexes 
      } 
    }
  }

};

// iteratorArr = [];
// for loop

// iteratorArr.push(iterator(array[i])) //function ===> tests array[i] against a boolean value
// //[true, false, false ,false, false, false]
// //run it through the first section
// //will get [true, false]
// //run 


// var iterator = function(value) { return value === 1; }; //bool
//         var numbers = [1, 2, 2, 3, 4, 4];
// //                       [true, false, false ,false, false, false]
// //                       [0,1,2,3,4,5]
// //                       [1, 2, 3, 4]
//                       [true, false]
// //                       [0,1]
// //                       [1,2]

// //         expect(_.uniq(numbers)).to.eql([1, 2]);






  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    /* START SOLUTION */
     var mapArr = [];
     for ( var i = 0; i < collection.length; i++) {
      mapArr.push(iterator(collection[i]));
     }
       return mapArr;
    /* END SOLUTION */

  };

  /*
   * TIP: map is really handy when you want to transform an array of
   * values into a new array of values. _.pluck() is solved for you
   * as an example of this.
   */

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(collection, key) {
    // TIP: map is really handy when you want to transform an array of
    // values into a new array of values. _.pluck() is solved for you
    // as an example of this.
    /* START SOLUTION */
      var pluckArr = [];
      for (var i = 0; i < collection.length; i++) {
        pluckArr.push(collection[i][key]);
      }
      return pluckArr;
    /* END SOLUTION */
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(accumulator, item) for each item. accumulator should be
  // the return value of the previous iterator call.
  //
  // You can pass in a starting value for the accumulator as the third argument
  // to reduce. If no starting value is passed, the first element is used as
  // the accumulator, and is never passed to the iterator. In other words, in
  // the case where a starting value is not passed, the iterator is not invoked
  // until the second element, with the first element as its second argument.
  //
  _.reduce = function(collection, iterator, accumulator) {
    /* START SOLUTION */
    
    /* END SOLUTION */
  };

//var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
//=> 6
//  The iteratee is passed four arguments: the memo(accumulator), then the value and index (or key) of the iteration,
// and finally a reference to the entire list.












}());