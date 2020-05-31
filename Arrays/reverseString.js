// reverse a string

// using built in methods
function reverse(string) {
  return string.split('').reverse().join('');
}

// for of loop
function reverse(str) {
  let reversed = '';
  for (character of str) {
    reversed = character + reversed;
  }
  return reversed;
}
