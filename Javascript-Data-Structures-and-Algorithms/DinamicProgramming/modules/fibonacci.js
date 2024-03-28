'use static'

const cache = {};

function fibDP(n) {
  if (n <= 1)
    return n;
  if (cache[n])
    return cache[n];
  return (cache[n] = fib(n - 1) + fib(n - 2));
}

let getFib = fib(6);
console.log(getFib);