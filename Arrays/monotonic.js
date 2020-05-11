// Problem:

{
  /* 
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array A is monotone increasing if for all i <= j, A[i] <= A[j].
An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic. */
}

// input is an array
// output is boolean true or false
// if the numbers in the array are increasing or decreasing as you move through the array, return true
// loop through the input array, compare indicies to see if they are less than or equal to, or greater than or equal to and return true
// looks like a nested loop is exprected

// Example 1:
// Input: [1,3,2]
// Output: false

// Example 2:
// Input: [1,2,4,5]
// Output: true

// Example 3:
// Input: [6,5,4,4]
// Output: true

// My first submission
// returns true even on non monotonic arrays.
// need to revisit
var isMonotonic = function (A) {
  for (i = A.length - 1; i >= 0; i--) {
    for (j = 0; j <= A.length; i++) {
      if (A[i] <= A[j]) {
        return true;
      } else if (i <= j) {
        return true;
      } else if (A[i] >= A[j]) {
        return true;
      } else {
        return false;
      }
    }
  }
};
