https://www.codewars.com/kata/6632524dbab8c72ccc4ff195/train/javascript

Problem Description:

As a MotoGP commentator, you're tasked with interpreting qualifying results to determine each racer's starting position on the grid. The grid is organized into rows of three racers each, with positions within a row not aligned. Every rider in a row starts a little forward from the next rider. The lowest position number marks the top of the row, while the highest indicates the bottom, with the middle position between them.

Write a function that takes the name of a racer and their qualifying position as input and returns a string indicating their starting position on the grid.

Example grid: https://images.app.goo.gl/ogBU5QvvK6vd5k2j9

Function Specifications:

Input: A string representing the racer's name and an integer indicating their qualifying position.
Output: A string describing the racer's starting position on the grid in the specified format.

line != 1 && pInline == 2
Example Input: 'Valentino Rossi', 11
Example Output: 'Valentino Rossi starts from the middle of the 4th row

Exceptions:

line == 1 && pInline == 1
If position is 1 then the text should be '[Rider Name] starts from pole position'

line == 1 && pInline == 2
If the racer qualifies in the 1st row, the output should use "front row" instead.
Example Input: 'Jorge Martin, 2
Example Output: 'Jorge Martin starts from the middle of the front row'

Don't worry about validating the input. Rider name is always a string. Position is a number between 1 and 20 included.

Thank you for passing by, I hope you enjoy solving this kata.


Tests
const { assert } = require('chai');
const name = 'Marc Marquez'

describe('Fixed Tests', () => {
  it('Racer is in the front row', () => {
    assert.strictEqual(
      gridPosition(name, 2),
      'Marc Marquez starts from the middle of the front row',
      'Incorrect answer for rider = Marc Marquez, position = 2'
    );
    assert.strictEqual(
      gridPosition(name, 3),
      'Marc Marquez starts from the bottom of the front row',
      'Incorrect answer for rider = Marc Marquez, position = 3'
    );
  });
  it('Racer is in pole', () => {
    assert.strictEqual(
      gridPosition(name, 1),
      'Marc Marquez starts from pole position',
      'Incorrect answer for rider = Marc Marquez, position = 1'
    );
  });
  it('Racer in various positions', () => {
    assert.strictEqual(
      gridPosition(name, 11),
      'Marc Marquez starts from the middle of the 4th row',
      'Incorrect answer for rider = Marc Marquez, position = 11'
    );
    assert.strictEqual(
      gridPosition(name, 13),
      'Marc Marquez starts from the top of the 5th row',
      'Incorrect answer for rider = Marc Marquez, position = 13'
    );
    assert.strictEqual(
      gridPosition(name, 9),
      'Marc Marquez starts from the bottom of the 3rd row'
    );
  });
});


