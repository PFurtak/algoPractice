// implement a function called countUniqueValues, which accepts a sorted Array,
// and counts the unique values in the Array. There can be negative numbers in the Array
// but the numbers will always be sorted.

function countUniqueValues(array) {
  if (array.length === 0) {
    return 0;
  }

  let i = 0;

  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
}

countUniqueValues([1, 1, 1, 1, 1, 1, 2]);
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
countUniqueValues([]);
countUniqueValues([-2, -1, -1, 0, 1]);
