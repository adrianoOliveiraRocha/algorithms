'use strict'

function sort012(arr, N) {
  
  let low = 0;
  let mid = 0; 
  let hight = N - 1; 

  while (mid <= hight) {
    switch (arr[mid]) {
      case 0:          
        [arr[low], arr[mid]] = [arr[mid], arr[low]];
        low++;
        mid++;
        break;
      case 1:
        mid++;
        break;
      case 2:          
        [arr[mid], arr[hight]] = [arr[hight], arr[mid]];
        hight--;
        break;
    }
  }
  
}

module.exports = sort012
