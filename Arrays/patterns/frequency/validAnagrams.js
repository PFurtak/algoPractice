// write a function that compares two strings and returns
// true or false if the second string is an anagram of the first.

function anagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  let lookup = {};

  for (val of string1) {
    let letter = string1[val];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (val of string2) {
    let letter = string2[val];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
