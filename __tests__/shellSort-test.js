/* global jest,describe,it,expect,shellSort */
'use strict';

jest.dontMock('../shellSort');

var shellSort = require('../shellSort');

function createRandomArray(size, from, to) {
  var array = [];
  while(size--) {
    array.push(from + (Math.random() * (to - from) >> 0));
  }
  return array;
}

describe('Shell sort', function () {
  it('Should work with empty arrays', function () {
    expect(shellSort([])).toEqual([]);
  });

  it('Should work with previously sorted array', function () {
    expect(shellSort([1,2,3,4,5,6])).toEqual([1,2,3,4,5,6]);
  });

  describe('Random arrays', function () {
    it('Should work with 100 elements', function () {
      var array = createRandomArray(100, 0, 100);
      expect(shellSort(array)).toEqual(array.sort(function (a, b) {
        return a - b;
      }));
    });

    it('Should work with 1000 elements', function () {
      var array = createRandomArray(1000, 0, 1000);
      expect(shellSort(array)).toEqual(array.sort(function (a, b) {
        return a - b;
      }));
    });

    it('Should work with 100000 elements', function () {
      var array = createRandomArray(100000, 0, 100000);
      expect(shellSort(array)).toEqual(array.sort(function (a, b) {
        return a - b;
      }));
    });
  });
});
