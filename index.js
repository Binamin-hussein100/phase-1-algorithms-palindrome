function reverse(word){
  const reversedWordy = word.split("").reverse().join("")
  console.log(reversedWordy)
  return reversedWordy
}

function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverse(word)
  if(reversedWord === word){
     return true
  }else{
    return false
  }
  
}

/* 
  Add your pseudocode here
  reverse the input string
  if reversed string === string
    return true
  else return false
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

  console.log("Expecting: true")
  console.log(" =>",isPalindrome("a"))
}

module.exports = isPalindrome;
