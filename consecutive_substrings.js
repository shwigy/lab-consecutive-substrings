function consecutiveSubstrings(string) {
  // type your code here
  const result = [];
 
  // outer loop, picks the STARTING character of each substring
  for (let i = 0; i < string.length; i++) {
 
    for (let j = i; j < string.length; j++) {
 
      // slice(i, j + 1) grabs characters from index i up to AND including j
      result.push(string.slice(i, j + 1));
    }
  }
 
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));

  console.log("");
 
  console.log("Expecting: []");
  console.log("=>", consecutiveSubstrings(''));
 
  console.log("");
 
  console.log("Expecting: ['a', 'ab', 'b']");
  console.log("=>", consecutiveSubstrings('ab'));
}

module.exports = consecutiveSubstrings;


