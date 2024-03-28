let arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  let t = arr.length;
  let p = 0, n = 0, z = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      n++;
    }
    else if(arr[i] == 0) {
      z++;
    }
    else {
      p++;
    }
  }

  console.log(p / t)
  console.log(n / t)
  console.log(z / t);
  
}

plusMinus(arr);