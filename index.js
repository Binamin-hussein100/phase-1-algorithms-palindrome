function isPalindrome(word) {
  // Write your algorithm here
  var len = word.length
  var mid = Math.floor(len/2)
  console.log(mid)
  for (i=0; i < mid;i++){
    if(word[1] !== word[len-1 -i]){
      return false
    }else if(len === 1){
      return true
    }
    else if(len === 2){
      return false
    }else{
      true
    }
  }
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

  console.log("Expecting: true")
  console.log(" =>",isPalindrome("a"))
}

module.exports = isPalindrome;
