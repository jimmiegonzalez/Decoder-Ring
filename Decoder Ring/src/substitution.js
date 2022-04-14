// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    // Creating a helper function that takes 3 parameters. Then use the map() method to create a new array with the msg data insode.
    
    function mapChar(msg, alpha1, alpha2) {
      return msg.map((letter) => {
        const index = alpha1.indexOf(letter);
        if (index === -1)
          return letter;
        return alpha2[index];
      });
    }
    
    // If alphabet is false or the length is not equal to 26, return false.
    if (!alphabet || alphabet.length !=26)
      return false;
    
    // Create 3 variables. Variables will be split so each character is a particular string. Two of them also get converted to lower case.
    
    const regularAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
    const newAlpha = alphabet.toLowerCase().split("");
    const msg = input.toLowerCase().split("");
    
    //A for loop within a for loop that first loops through newAlpha[i]length, then loops through newAlpha[j]length to see if there are any duplicate characters.
    
    for (let i = 0; i < newAlpha.length; i++) {
      for (let j = i + 1; j < newAlpha.length; j++) {
        if (newAlpha[i] === newAlpha[j])
          return false;
      }
    }
  // If encode is truthy, we return the mapChar function.
    
    if (encode) 
      return mapChar(msg, regularAlpha, newAlpha).join("");
    return mapChar(msg, newAlpha, regularAlpha).join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
