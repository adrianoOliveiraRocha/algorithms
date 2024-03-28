function birthdayCakeCandles(candles) {
  let countElements = {}
  for(let el of candles) {
    if(countElements[el] > 0) {
      countElements[el]++;
    } else {
      countElements[el] = 1;
    }
  }
  
  let values = Object.values(countElements);
  let tallestValue = values[0];
  for(let v of values) {
    if(v > tallestValue) tallestValue = v;
  }
  
  return tallestValue;
}

let candles = [4, 3, 6, 7, 7, 7, 1];
birthdayCakeCandles(candles);