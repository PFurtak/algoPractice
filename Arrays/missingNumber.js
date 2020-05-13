{
  /*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8
Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
 */
}

// input is an array
// output is a single integer of the missing number in the array
// going to need a function that takes in an array (inputArray)
// O(n) time complexity is required, meaning no nested loops
// I think a good approach would be to sort in ascending order, then loop through the inputArray and compare indices to find the missing number
// create a variable for the missing number with value of null

// My first solution... breaks on testcondition with a single integer in the array

let missingNumber = function (inputArray) {
  let missingNum = null;
  inputArray.sort((a, b) => a - b);

  if (inputArray.length === 1 && inputArray[0] > 0) {
    missingNum = inputArray[0] - 1;
  } else if (inputArray.length === 1 && inputArray[0] <= 0) {
    missingNum = inputArray[0] + 1;
  } else
    for (let i = 0; i < inputArray.length - 1; i++) {
      if (inputArray[i] + 1 !== inputArray[i + 1]) {
        missingNum = inputArray[i] + 1;
      } else if (inputArray[i] + 1 === inputArray[i + 1]) {
        missingNum = inputArray[inputArray.length] + 1;
      }
    }
  return missingNum;
};

missingNumber([3, 0, 2, 4, 6, 1]);
