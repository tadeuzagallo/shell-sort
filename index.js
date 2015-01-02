'use strict';

var incs = new Uint32Array([1391376, 463792, 198768, 86961, 33936, 13776, 4592, 1968, 861, 336, 112, 48, 21, 7, 3, 1]);

function defaultCompareFunction(a, b) {
  return a - b;
}

function shellSort(array, compareFunction, reverse) {
  var l = array.length;
  var tmp, compare;

  var _compare = compareFunction || defaultCompareFunction;

  if (reverse) {
    compare = function(a, b) {
      return _compare(b, a);
    };
  } else {
    compare = _compare;
  }

  for (var k = 0; k < 16; k++) {
    for (var i = incs[k]; i < l; i++) {
      var v = array[i];
      var j = i;

      while (j >= i && compare(array[j - i], v) > 0) {
        tmp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = tmp;
        j -= i;
      }

      tmp = array[j];
      array[j] = array[i];
      array[i] = tmp;
    }
  }
}

module.exports = shellSort;
