https://www.codewars.com/kata/58a3f57ecebc06bfcb00009c/train/javascript

Task

let F(N) be the sum square of digits of N. So:

F(1) = 1, F(3) = 9, F(123) = 14

Choose a number A, the sequence { A0, A1, .. } is defined as follows:

A0 = A
A1 = F(A0)
A2 = F(A1) ...

if A = 123, we have:

123 →  14 (1 x 1 + 2 x 2 + 3 x 3)
    →  17 (1 x 1 + 4 x 4)
    →  50 (1 x 1 + 7 x 7)
    →  25 (5 x 5 + 0 x 0)
    →  29 (2 x 2 + 5 x 5)
    →  85 (2 x 2 + 9 x 9)
    →  89 (8 x 8 + 5 x 5)              ---
    → 145 (8 x 8 + 9 x 9)              |r
    →  42 (1 x 1 + 4 x 4 + 5 x 5)      |e
    →  20 (4 x 4 + 2 x 2)              |p
    →   4 (2 x 2 + 0 x 0)              |e
    →  16 (4 x 4)                      |a
    →  37 (1 x 1 + 6 x 6)              |t
    →  58 (3 x 3 + 7 x 7)              |
    →  89 (5 x 5 + 8 x 8)              --- 
    → ......

As you can see, the sequence repeats itself. Interestingly, whatever A is, there's an index such that from it, the sequence repeats again and again.

Let G(A) be the minimum length of the repeat sequence with A0 = A.

So G(85) = 8 (8 number : 89,145,42,20,4,16,37,58)

Your task is to find G(A) and return it.
Input/Output

    [input] integer a0

the A0 number

    [output] an integer

the length of the repeat sequence

assert.strictEqual(repeatSequenceLen(1), 1, 'repeatSequenceLen(1)')
assert.strictEqual(repeatSequenceLen(85), 8, 'repeatSequenceLen(85)')
assert.strictEqual(repeatSequenceLen(810), 8, 'repeatSequenceLen(810)')
assert.strictEqual(repeatSequenceLen(812), 8, 'repeatSequenceLen(812)')
assert.strictEqual(repeatSequenceLen(818), 1, 'repeatSequenceLen(818)')
assert.strictEqual(repeatSequenceLen(833), 1, 'repeatSequenceLen(833)')

PORTUGUESE
Tarefa

seja F(N) a soma quadrada dos dígitos de N. Então:

F(1) = 1, F(3) = 9, F(123) = 14

Escolha um número A, a sequência {A0, A1, .. } é definida da seguinte forma:

A0 = A
A1 = F(A0)
A2 = F(A1) ...

se A = 123, temos:

123 → 14 (1x1 + 2x2 + 3x3)
    → 17 (1x1 + 4x4)
    → 50 (1x1 + 7x7)
    → 25 (5 x 5 + 0 x 0)
    → 29 (2x2 + 5x5)
    → 85 (2x2 + 9x9)
    → 89 (8 x 8 + 5 x 5)           ---
    → 145 (8 x 8 + 9 x 9)          |r
    → 42 (1 x 1 + 4 x 4 + 5 x 5)   |e
    → 20 (4 x 4 + 2 x 2)           |p
    → 4 (2 x 2 + 0 x 0)            |e
    → 16 (4 x 4)                   |a
    → 37 (1 x 1 + 6 x 6)           |t
    → 58 (3 x 3 + 7 x 7)           |
    → 89 (5x5 + 8x8)               --- 
    → ......

Como você pode ver, a sequência se repete. Curiosamente, seja o que for A, existe um índice tal que, a partir dele, a sequência se repete continuamente.

Seja G(A) o comprimento mínimo da sequência de repetição com A0 = A.

Então G (85) = 8 (número 8: 89.145,42,20,4,16,37,58)

Sua tarefa é encontrar G(A) e devolvê-lo.
Entrada/Saída

     [entrada] inteiro a0

o número A0

     [saída] um número inteiro

o comprimento da sequência de repetição