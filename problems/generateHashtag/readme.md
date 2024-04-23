https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.

Examples

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

Tests
assert.strictEqual(generateHashtag(""), false, "Expected an empty string to return false")
assert.strictEqual(generateHashtag(" ".repeat(200)), false, "Still an empty string")
assert.strictEqual(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
assert.strictEqual(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.")
assert.strictEqual(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
assert.strictEqual(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
assert.strictEqual(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars")
assert.strictEqual(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false, "Should return false if the final word is longer than 140 chars.")
assert.strictEqual(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work")
assert.strictEqual(generateHashtag("a".repeat(140)), false, "Too long")