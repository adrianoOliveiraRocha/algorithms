'use strict'

function extractIds(data){
  let ids = [], objs = [];
  current = data;
  while(current) {
    Object.keys(current).forEach((item, i) => {
      if(item == "id") res.push(data[item])
      else if(current == "items") current = data[item]
    });
  }
  console.log(current)
  return res
}

module.exports = extractIds
