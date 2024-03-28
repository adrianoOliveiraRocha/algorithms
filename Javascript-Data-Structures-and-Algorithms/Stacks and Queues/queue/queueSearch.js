const Queue = require('./Queue');

function queueSearch(queue, element) {
  let bufferArray = queue.getBuffer();
  let bufferQueue = new Queue(bufferArray);

  while(!bufferQueue.isEmpty()) {
    if(bufferQueue.enqueue() == element) return true;
  }

  return false;
  
}