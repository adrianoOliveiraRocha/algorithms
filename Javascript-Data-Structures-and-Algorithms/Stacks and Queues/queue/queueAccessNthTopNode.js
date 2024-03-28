const Queue = require('./Queue');

function queueAccessNthTopNode(queue, n) {
  if(n <= 0) throw 'n is minor or equals zero';
  let bufferArray = queue.getBuffer();
  let bufferQueue = new Queue(bufferArray);

  while(--n >= 0) {
    bufferQueue.dequeue();
  }

  return bufferQueue.dequeue();

}

module.exports = queueAccessNthTopNode;