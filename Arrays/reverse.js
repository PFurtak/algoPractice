// Problem:

{
  /* Given an array, A, of N integers, print each element in reverse order as a
     single line of space-separated integers. 
     
     sample input: arr = [1,4,3,2]
     sample output: arr = [2,3,4,1] */
}

// My Steps to take

{
  /*
Create a function
Create a reversedArr array
Loop through the input array
Unshift every entry to the front of the reversedArr array
Return the reversedArr array
 */
}

//My first solution

const reverseIntegers = (arr) => {
  let reversedArr = [];
  for (let i = 0; i < arr.length; i++) {
    reversedArr.unshift(arr[i]); //unshift is O(n) | Maybe I can get an O(1) solution by iterating backwards and pushing instead...
  }
  return reversedArr;
};

reverseIntegers([1, 4, 3, 2]);
