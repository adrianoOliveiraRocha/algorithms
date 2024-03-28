
function timeConversion(s) {

  function fixDigits(x) {
    if(x.length == 1) return '0' + x;
    else return x;
  }

  function fixHour(h, t) {
    if(h == '12' && t == 'AM') return '00';
    else if(h == '24') return '12'
    else return h;
  }

  let arr = s.split(':');
  let h = parseInt(arr[0]), m = parseInt(arr[1]), 
  sec = parseInt(arr[2][0] + arr[2][1]), 
  t = arr[2][2] + arr[2][3]; 
  
  let totalSec = (h * 3600) + (m * 60) + sec;
  
  if(t == 'PM') totalSec += 12 * 3600;

  let hString = fixDigits(JSON.stringify(parseInt(totalSec / 3600)));
  hString = fixHour(hString, t);
  totalSec = totalSec % 3600; 
  let mString = fixDigits(JSON.stringify(parseInt(totalSec / 60)));
  totalSec = totalSec % 60;
  let sString = fixDigits(JSON.stringify(totalSec));
  return `${hString}:${mString}:${sString}`;

}

let s0 = '07:05:45PM';
// console.log(timeConversion(s0));
// output = 19:05:45

let s1 = '07:05:45AM';
// console.log(timeConversion(s1));
// output = 07:05:45

let s2 = `12:40:22AM`;
// console.log(timeConversion(s2));
// output 00:40:22

let s3 = '12:45:54PM';
console.log(timeConversion(s3));
// output 12:45:54