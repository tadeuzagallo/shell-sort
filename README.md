# Shell sort

CommonJS shell sort implementation using Sedgewick's gap sequence

## Usage

```js
var shellSort = require('shell-sort');

// Signature

shellSort(array [, compareFunction] [, reverse]);

// Possible usages

shellSort(array);
shellSort(array, compareFunction);
shellSort(array, compareFunction, true);
shellSort(array, undefined, true);

```
