{
  /* 
Given a non-empty array of integers, 
return the third maximum number in this array. 
If it does not exist, return the maximum number. 
The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]
Output: 1
Explanation: The third maximum is 1.

Example 2:
Input: [1, 2]
Output: 2
Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

Example 3:
Input: [2, 2, 3, 1]
Output: 1
Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.

*/
}

// We're going to need a function
// We're going to need to loop through the provided array
// We're going to need variable for each max

// We're going to need to compare the indicies -
// and shift the max's down as the biggest index is brought to max1

const thirdMax = (arr) => {
  let max1,
    max2,
    max3 = undefined; // the undefineds handle the situation where the max's are not yet assigned a value when the loop starts *I WAS MISSING THIS IN MY SOLUTION*
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === max1 || arr[i] === max2 || arr[i] === max3) continue; // essentially a "do nothing" when the index matches the max value

    if (max1 === undefined || arr[i] > max1) {
      max3 = max2;
      max2 = max1;
      max1 = arr[i];
    } else if (max2 === undefined || arr[i] > max2) {
      max3 = max2;
      max2 = arr[i];
    } else if (max3 === undefined || arr[i] > max3) {
      max3 = arr[i];
    }
  }
  return max3 === undefined ? max1 : max3;
};

// [2, 2, 3, 1]
//value1 = 2
//value2 = 2
//value3 = 2
//
thirdMax([2, 2, 3, 1]);
