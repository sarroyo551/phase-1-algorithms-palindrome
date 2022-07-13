function isPalindrome(word) {
  //for(let i = 0; i < word.length; 
  
  for (let i = 0; i < word.length / 2; i++) {
    //console.log(word[i])
    console.log(word[word.length - 1 - i])
    console.log(word[i] !== word[word.length - 1 - i])
    if (word[i] !== word[word.length - 1 - i]) {
      return false 
    }    
  } 
  return true 
}

/* 
  isPalindrome will be used to only deal with strings that are lowercase
  expect to use toLowerCase (?)
  function should return true if it reads the string the same forwards or backwords (mom)

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
