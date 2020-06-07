// Write a function called maxSubarraySum which accepts an array
// of integers and a number called n. The function should calculate
// the maximum sum of n consecutive elements in the array.

// examples
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
// maxSubarraySum([4, 2, 1, 6], 1); // 6
// maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
// maxSubarraySum([], 4); // null

// NAIVE O(n)^2:

function maxSubarraySum(array, num) {
  if (num > array.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < array.length; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += array[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// Sliding window O(n):
// Use when you are working with Consecutive values

function maxSubarraySum(array, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (array.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += array[i];
  }
  tempSum = maxSum;
  for (let i = num; i < array.length; i++) {
    tempSum = tempSum - array[i - num] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
