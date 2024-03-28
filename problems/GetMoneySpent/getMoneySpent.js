'use strict'

class Solution {
  constructor() {
    this.test();
    this.test1();
    this.test2();
    this.test3();
  }

  test() {
    let keyboards = [40, 50, 60];
    let drives = [5, 8, 12];
    let b = 60;
    console.log(this.getMoneySpent(keyboards, drives, b));
  }

  test1() {
    let keyboards = [ 3, 1 ]
    let drives = [ 5, 2, 8 ]
    let b = 10
    console.log(this.getMoneySpent(keyboards, drives, b));
  }

  test2() {
    let keyboards = [5, 8, 12];
    let drives = [40, 50, 60];
    let b = 60;
    console.log(this.getMoneySpent(keyboards, drives, b));
  }

  test3() {
    let keyboards = [40, 50, 60];
    let drives = [5, 8, 12];
    let b = 40;
    console.log(this.getMoneySpent(keyboards, drives, b));
  }

  getMoneySpent(keyboards, drives, b) {
    let max = -1;
    keyboards.forEach((k) => {
      drives.forEach((d) => {
        if (k + d >= max && k + d <= b) max = k + d;
      });
    });
    return max
  }

  /*
  getMoneySpent(keyboards, drives, b) {
    let res = -1;
    keyboards.sort((a,b) => b-a);
    drives.sort((a,b) => b-a);
    
    if(keyboards[keyboards.length-1] 
      + drives[drives.length-1]
      > b) {
        return -1;
      }

    while(keyboards[0] >= b) {
      keyboards.shift();
      if(keyboards.length <= 0) return -1;
    }
    while(drives[0] >= b) {
      drives.shift();
      if(drives.length <= 0) return -1;
    }

    let msk = Math.max(...keyboards), msd = Math.max(...drives);
    
    if(msk >= msd) {
      let complement = b - msk;
      let found = false;
      while(!found) {
        if(drives.includes(complement)) {
          res = msk + complement;
          found = true;
        } else {
          complement--;
        }
      }
    } else {
      let complement = b - msd;
      let found = false;
      while(!found) {
        if(keyboards.includes(complement)) {
          res = msd + complement;
          found = true;
        } else {
          complement--;
        }
      }
    }
    return res;
  }

  */

  /*
    Time limit exceeded
    Your code did not execute within the time limits. 
    Please optimize your code. For more information on execution 
    time limits, refer to the environment page
    
  getMoneySpent(keyboards, drives, b) {
    keyboards.sort((a, b) => b-a);
    drives.sort((a, b) => b-a);
    let k = 0, d = 0;
    if(keyboards[keyboards.length-1] + drives[drives.length-1] > b) {
      return -1;
    } 
    while(true) {
      let s = keyboards[k] + drives[d];
      if(s > b) {
        let s1 = keyboards[k+1] + drives[d];
        let s2 = keyboards[k] + drives[d+1];
        if(s1 <= b && s2 > b) return s1;
        else if(s2 <= b && s1 > b) return s2;
        else if(s1 < b && s2 < b) {
          if(s1 > s2) return s1;
          else return s2;
        } else if(s1 > b && s2 > b){
          if(Math.abs(b - s1) < Math.abs(b - s2)) k++;
          else d++;
        }
      }
    }
  }
  */
}

new Solution();