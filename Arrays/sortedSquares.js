{/* 
Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

 

Example 1:

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Example 2:

Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Note:

1 <= A.length <= 10000
-10000 <= A[i] <= 10000
A is sorted in non-decreasing order.
*/}

// input is an array
// output is the squared numbers of the input array *HAS TO BE SORTED IN ASCENDING ORDER*
// we'll have to create a variable for the output array
// loop through the input array and multiply each value by itself and push to the output array
// loop through the output array and sort with conditionals... nested for brute force

// My first submission using a builtin sort method, brute force O(n)
const sortedSquares = (arr) => {
    let squares = [];

    for (i = 0; i < arr.length; i++) {
        squares.push(arr[i] * arr[i]);
    }
    return squares.sort((a, b) => a - b)
}
// I could do this with a 2 pointer method... will review and revisit


