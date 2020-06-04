// Write a function called sumZero that accepts a
// sorted array of integers and returns the first
// pair where their sum equals 0. The pair should
// be returned as an array or undefined if they
// do not exist.

// ** must be sorted for this approach **

//** NAIVE O(n)^2:

function sumZero(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        return [array[i], array[j]];
      }
    }
  }
  console.log('Returning undefined');
  return undefined;
}

sumZero([-9, 2, 3, 4, 5]);

//Optimal 0(1) using multiple pointers, only works on sorted arrays:

function sumZero(array) {
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer < rightPointer) {
    let sum = array[leftPointer] + array[rightPointer];
    if (sum === 0) {
      return [array[leftPointer], array[rightPointer]];
    } else if (sum > 0) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
}
