function isPalindrome(word) {
  
  //We use a for loop here to iterate over the string 
  // if i ='s 0 and i (aka 0) is less than the length of characters in the string (racecar has 7) then we divide the string length by 2
  //After that we use i++ to signal we want to continue to iterate over plus one each time 
  for (let i = 0; i < word.length / 2; i++) {
  
  //The variable name j equals 'word' (aka racecar).length which is 7
  //We subtract 1 from the string character
  const j = word.length - 1 - i

  // If i does not equal j then we return false 
  if (word[i] !== word[j]) return false
  }

  return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
