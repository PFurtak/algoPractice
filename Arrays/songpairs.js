{
  /* In a list of songs, the i-th song has a duration of time[i] seconds. 

Return the number of pairs of songs for which their total duration in seconds is divisible by 60.  Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

Example 1:
Input: [30,20,150,100,40]
Output: 3
Explanation: Three pairs have a total duration divisible by 60:
(time[0] = 30, time[2] = 150): total duration 180
(time[1] = 20, time[3] = 100): total duration 120
(time[1] = 20, time[4] = 40): total duration 60
Example 2:

Input: [60,60,60]
Output: 3
Explanation: All three pairs have a total duration of 120, which is divisible by 60.
 
Note:
1 <= time.length <= 60000
1 <= time[i] <= 500 */
}

// input is an array
// output is a single int with the number of pairs of songs divisible by 60
// create a function
// nested loop to check for every possible pair
// put all pairs ina  temp array
// when loops are finished, return the temp array's length divided by 2

//Brute force, works on test case.... leetcodes test fails with a javascript heap out of memory error... will revisit
var numPairsDivisibleBy60 = function (time) {
  let tempArr = [];

  for (i = 0; i < time.length; i++) {
    for (j = i + 1; j < time.length; j++) {
      if ((time[i] + time[j]) % 60 == 0) {
        tempArr.push(time[i], time[j]);
      }
    }
  }
  return tempArr.length / 2;
};
