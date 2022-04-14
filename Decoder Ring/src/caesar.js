// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift = 0, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    
    //input = "m","e","s","s","a","g","e";
    
    const message = input.toLowerCase().split("");
    
    //if statement that sets encode to false and creates shift number negative to decode message.
    
    if (!encode) shift = 0 - shift;
    
    const msg = message.map((index) => {
      let asciiIndex = index.charCodeAt(0) - 97;
      
      if (asciiIndex < 0 || asciiIndex > 26) {
        return index;
      }
      
      asciiIndex = asciiIndex + shift;
      if (asciiIndex < 0) asciiIndex += 26;
      asciiIndex = asciiIndex % 26;
      console.log(index);

      // Returning a String.fromCharCode() method with variable to return the message from numbers back into a string.
      asciiIndex += 97;
      return String.fromCharCode(asciiIndex);
    });
    return msg.join("");
  }

  /*function caesar(input, shift, encode = true) {
    // your solution code here
  }*/

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
