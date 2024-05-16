https://www.codewars.com/kata/59557b2a6e595316ab000046/train/javascript

Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}

should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

Good Luck!


assert.deepEqual(convertHashToArray({name: "Jeremy"}),[["name", "Jeremy"]]);

assert.deepEqual(convertHashToArray({name: "Jeremy", age: 24}).sort(),[["age", 24], ["name", "Jeremy"]]);

assert.deepEqual(convertHashToArray({name: "Jeremy", age: 24, role: "Software Engineer"}).sort(),[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]);

assert.deepEqual(convertHashToArray({product: "CodeWars", powerLevelOver: 9000}).sort(),[["powerLevelOver", 9000], ["product", "CodeWars"]]);

assert.deepEqual(convertHashToArray({}),[]);