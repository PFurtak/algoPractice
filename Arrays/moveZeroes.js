{
  /* Given an array nums, write a function to move all 0's to the end of it 
  while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array. */
}

// input is an array
// output will be an array with zeroes on the end
// must be done in place, so don't create a new variable
// create a functioon that will loop through the array and push zeroes to the end

const moveZeroes = function (nums) {
  for (i = nums.length; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1); // had to use splice modifying in place array, otherwise pushing directly caused a heap error
      nums.push(0);
    }
  }
};

moveZeroes([0, 1, 0, 3, 12]);

// 2 pointer method exists, will revisit
