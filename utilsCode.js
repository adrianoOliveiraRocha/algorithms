// removing duplicates from a array

let arr = ["apple", "mango", "apple",
          "orange", "mango", "mango"];

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates(arr));
