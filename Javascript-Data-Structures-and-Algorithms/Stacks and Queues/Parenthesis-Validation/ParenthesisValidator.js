const Stack = require('./../stack/Stack');

const ParenthesisValidator = (function () {

  function main() {
    //...
  }

  main.prototype.isParenthesisValid = function(validationString) {
    stack = new Stack();
    for(let pos = 0; pos < validationString.length; pos++) {
      let currentChar = validationString.charAt(pos);
      if(currentChar == '(') {
        stack.push(currentChar);
      } else if(currentChar == ')') {
        if(stack.isEmpty()) return false;
        stack.pop()
      }
    }
    return stack.isEmpty();
  }
  
  return main;

})();

module.exports = ParenthesisValidator;
