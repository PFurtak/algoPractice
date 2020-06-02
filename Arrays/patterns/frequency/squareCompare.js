// Generally, you can use hash maps to optimize your code when you are
// looking for the frequency of something.

// Write a function called same that accepts two arrays. The function should
// return true if every value in the array has
// it's corresponding value squared in the second array.
// The frequency of values must be the same.

// ex
// same([1,2,3], [4,1,9]) true
// same([1,2,3], [1,9]) false
// same([1,2,1], [4,4,1]) false

//NAIVE SOLUTION: O(n)^2

function same(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    let correctIndex = array2.indexOf(array1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    array2.splice(correctIndex, 1);
  }
  return true;
}

//Optimal with Object / hash map: O(n)

function same(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (val of array1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }

  for (val of array2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }
  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) {
      return false;
    }
    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false;
    }
  }
  return true;
}
