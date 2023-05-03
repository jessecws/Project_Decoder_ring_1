// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesarShift(input, shift) {
    let output = "";
    let inputLower = input.toLowerCase();
    for (let i = 0; i < inputLower.length; i ++) {
      let character = inputLower[i];
      if (character.match(/[a-z]/)) {
        let code = character.charCodeAt(0);
        if (shift >= 0) {
          code = ((code - 97 + shift) % 26) + 97;
        } else {
          code = ((code - 97 - (-shift % 26) + 26) % 26) + 97;
        }
        output += String.fromCharCode(code);
      } else {
        output += character;

      }
    }

    return output;
  };

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!input || !shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    } else {
      if (encode === true) {
        return caesarShift(input, shift);
      } else {
        return caesarShift(input, -shift);
      }
    }
  };

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
