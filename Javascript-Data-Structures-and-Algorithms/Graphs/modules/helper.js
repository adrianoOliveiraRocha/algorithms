
function _isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function _extractMin(Q, dist) {
  let minimunDistance = Infinity;
  let nodeWithMinimumDistance = null;
  for(let node in Q) { // in return the key
    if(dist[node] <= minimunDistance) {
      minimunDistance = dist[node];
      nodeWithMinimumDistance = node;
    }
  }
  return nodeWithMinimumDistance;
}

module.exports = {_isEmpty, _extractMin};