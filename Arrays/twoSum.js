{
  /* 
Given an array of integers, return indices of the two numbers
such that they add up to a specific target.

You may assume that each input would have exactly one solution,
 and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]
  */
}

// input is an array, along with a single int for target
// output will be an array with 2 values
// we're going to need a function that takes the inputs
// an empty array will need to be created in the function for the output... RETURN IT
// we'll need to loop through the array and check if the sum is equal to target
// if the check passes, well need to place those indexes in the array we created and return


// My first solution
// tests show it only works if indicies are adjacent
// need to revisit

// to iterate through the whole list to check against just one index, it requires a nested loop...

// brute force o(n)^2
const twoSum = (nums, target) => {
  let indices = [];

  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        indices = [i, j] //could also push to indices indices.push(i,j)
        return indices
      }
    }
  }
};

// a faster solution uses a hashmap, will revisit

