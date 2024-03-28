'use strict'

function leftView(root) {
  let queue = [], res = [], curr = root;
  while(curr) {
    console.log(curr.data)
    res.push(curr.data);
    if(curr.right) {
      console.log('\t', curr.right.data, ' to queue');
      queue.push(curr.right);
    } else {
      console.log('\tcurr ', curr.data, 'dont has rigth');
    }
    curr = curr.left;
    if(!curr && queue.length > 0) {
      let next = queue.shift();
      if(next.right) {
        console.log('\t', next.right.data, ' to queue');
        queue.push(next.right);
      }
      curr = next.left;
      // console.log(curr)
    }
  }
  console.log('queue: ', queue);
  return res;
}

module.exports = leftView;