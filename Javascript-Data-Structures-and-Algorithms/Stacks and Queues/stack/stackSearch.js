const Stack = require("./Stack");

function stackSearch(stack, element) {
  let bufferArray = stack.getBuffer();
  let bufferStack = new Stack(bufferArray);
  while(!bufferStack.isEmpty != element) {
    if(bufferStack.pop() == element) return true;
  }
  return false;
}

module.exports = stackSearch;