'use strict'

class Solution {
  constructor() {
    // this.test1();
    // this.test2();
    this.test3();
  }

  test1() {
    // Expected Output: 2
    let a = [1, 2, 2, 3];
    console.log(this.equalizeArray(a))
  }

  test2() {
    // Expected Output: 4
    let arr = [1, 2, 3, 1, 2, 3, 3, 3];
    /* response is 4. The 1 was delected two times and the 2 was deleted 
    two times too. 2 + 2 = 4*/
    console.log(this.equalizeArray(arr));
  }

  test3() {
    /*
    I think, the problem may be when you have more then one number
    that repet equals number of times
    Example: [1, 2, 2, 2, 3, 3, 4, 4, 4]
    */
   let arr = [1, 2, 2, 2, 3, 3, 4, 4, 4]
   console.log(this.equalizeArray(arr));
  }
  // Congratulations
  equalizeArray(arr) {
    arr.sort((a, b) => a-b);
    let map = {}; 
    let moreRepetitive = 0; // number that is more repetitive
    for(let i = 0; i < arr.length; i++) {
      if(map[arr[i]]) map[arr[i]]++;
      else map[arr[i]] = 1;

      if(map[arr[i]] > moreRepetitive)
        moreRepetitive = map[arr[i]];
    }  
    
    let del = 0, again = false; 
    Object.keys(map).forEach(k => {
      if(map[k] != moreRepetitive) del += map[k];
      else {
        if(again) del += map[k];
        else again = true;
      }
    })
    return del;
  }

}

new Solution();

