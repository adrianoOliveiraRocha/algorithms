https://www.codewars.com/kata/65d8f6b9e3a87b313c76d807/train/javascript

Description

A centrifuge is a laboratory device used to separate fluids based on density. This is achieved through centrifugal force by spinning a collection of test tubes at high speeds. All holes on the centrifuge are equally distanced from their neighbouring holes and have the same distance to the center.

Task

Given a centrifuge, return whether it's balanced. A centrifuge is called balanced if the center of mass of the collection of test tubes coincides with the center of mass of the centrifuge itself. Test tubes in this kata all look the same and have the same weight.
Input

An array containing n elements representing a n-hole centrifuge. Elements can either be 0 (hole) or 1 (tube inserted).
Output

Return a boolean indicating whether the centrifuge is balanced.
Examples

Examples of 6-hole centrifuges with holes o and tubes x. Direction and starting point don't matter. In these examples, we start at the top hole/tube and move in clockwise direction.

balanced            balanced            unbalanced
[1,0,1,0,1,0]       [0,1,0,0,1,0]       [0,1,0,0,1,1]

    x                   o                  o  
o       o           o       x          x       x
    .                   .                  .
x       x           x       o          x       o
    o                   o                  o

Constraints

100 random tests with:

    centrifuges of size [2 - 55]
    tubes [1 - n] with n being the size
    given the low sizes, you have the freedom of choice to either pick an exact algorithm or a good approximator algorithm that is accurate in the low ranges
