const Stack = require('./Stack');

function stackAccessNthTopNode(stack, n) {
  let bufferArray = stack.getBuffer();
  if(n <= 0) throw 'N is minor or equals zero!';

  let bufferStack = new Stack(bufferArray);

  while(--n !== 0) {
    bufferStack.pop();
  }

  return bufferStack.pop();
}

module.exports = stackAccessNthTopNode