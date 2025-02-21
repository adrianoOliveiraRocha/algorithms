To solve this problem, we need to generate all possible non-empty sequences of letters using the given tiles. Since the order of the letters matters, this is a permutation problem. However, we need to account for the fact that some tiles may have the same letter, which means we have to avoid counting duplicate sequences.

Here's a step-by-step approach to solve the problem:

1. **Count the frequency of each letter**: This helps in handling duplicate letters efficiently.
2. **Generate all possible sequences**: Use backtracking to generate all possible sequences.
3. **Count unique sequences**: Ensure that each sequence is counted only once.

Here's the JavaScript code to achieve this:

```javascript
function numTilePossibilities(tiles) {
    // Count the frequency of each letter
    const count = {};
    for (const tile of tiles) {
        count[tile] = (count[tile] || 0) + 1;
    }

    // Backtracking function to generate sequences
    function backtrack() {
        let total = 0;
        for (const letter in count) {
            if (count[letter] > 0) {
                // Choose this letter
                total++;
                count[letter]--;
                // Recurse with the updated count
                total += backtrack();
                // Unchoose this letter
                count[letter]++;
            }
        }
        return total;
    }

    return backtrack();
}

// Example usage:
console.log(numTilePossibilities("AAB")); // Output: 8
console.log(numTilePossibilities("AAABBC")); // Output: 188
console.log(numTilePossibilities("V")); // Output: 1
```

### Explanation:

1. **Counting Frequencies**:
   - We first count how many times each letter appears in the `tiles` string. This is stored in the `count` object.

2. **Backtracking Function**:
   - The `backtrack` function is a recursive function that generates all possible sequences.
   - For each letter in the `count` object, if the count is greater than 0, we:
     - Increment the total count of sequences.
     - Decrement the count of the current letter (to mark it as used).
     - Recurse to generate sequences with the remaining letters.
     - After recursion, we increment the count back (backtracking step) to allow the letter to be used in other sequences.

3. **Return the Total**:
   - The `backtrack` function returns the total number of unique sequences.

### Complexity:
- **Time Complexity**: The time complexity is O(n!), where n is the number of tiles. This is because we are generating all possible permutations.
- **Space Complexity**: The space complexity is O(n) due to the recursion stack.

This solution efficiently handles the constraints and ensures that all unique sequences are counted correctly.