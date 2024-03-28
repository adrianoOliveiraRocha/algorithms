Kangaroo 1:
  initial point -> x1
  rate per meters -> v1

Kangaroo 2:
  initial point -> x2
  rate per meters -> v2

You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return Noooo!

Explaning the solution:
function kangaroo(x1, v1, x2, v2) {
  if(v1 < v2 || (x2 - x1) % (v1 - v2) !== 0) {
    return 'NO';
  } else {
    return 'YES';
  }
}

v1 < v2 means the kangaroo that starts in x1 will never reach the other
(x2 - x1) % (v1 - v2) !== 0 means 