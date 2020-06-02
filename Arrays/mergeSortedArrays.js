// merge sorted arrays [0,3,4,31], [4,6,30]

// function
// takes in two arrays
// return a single array that is still sorted

const mergeArraysSorted = (arrayA, arrayB) => {
  if (Array.isArray(arrayA) || Array.isArray(arrayB) !== false) {
    return console.log('Invalid inputs');
  }
  let mergedArray = [];

  for (i = 0; i < arrayA.length; i++) {
    for (j = 0; j < arrayB.length; i++) {
      if (arrayA[i] <= arrayB[j]) {
        mergedArray.push(arrayA[i]);
      } else {
        mergedArray.push(arrayB[j]);
      }
    }
  }
  console.log(mergedArray);
};

function mergeSortedArray(array1, array2) {
  const mergedArray = [];
  let array1Start = array1[0];
  let array2Start = array2[0];
  let i = 1;
  let j = 1;

  //check input
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Start || array2Start) {
    if (array1Start < array2Start) {
      mergedArray.push(array1Start);
      array1Start = array1[i];
      i++;
    } else {
      mergedArray.push(array2Start);
      array2Start = array2[j];
      j++;
    }
  }

  return mergedArray;
}
