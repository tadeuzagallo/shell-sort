'use strict';

var incs = new Uint32Array([1391376, 463792, 198768, 86961, 33936, 13776, 4592, 1968, 861, 336, 112, 48, 21, 7, 3, 1]);

function defaultCompareFunction(a, b) {
  return a - b;
}

function shellSort(srcArray, compareFunction, reverse) {
  var array = srcArray.slice(0);
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
    for (var h = incs[k], i = h; i < l; i++) {
      var v = array[i];
      var j = i;

      while (j >= h && compare(array[j - h], v) > 0) {
        array[j] = array[j - h];
        j -= h;
      }

      array[j] = v;
    }
  }

  return array;
}

module.exports = shellSort;
