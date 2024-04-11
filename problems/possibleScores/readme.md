https://www.codewars.com/kata/59ffd493ba2a14d16f0000d9/train/javascript

Problem

John and Tom are students of Myjinxin.

In the classroom, Myjinxin often gives 10 judgment questions, let the students write the answer. o represents right and x represents wrong. i.e. If the students think that the 10 judgments are all right, his answer will be "oooooooooo".

Tom always answers questions earlier than John. Then, the teacher gives Tom a score, each subject worth 10 points. i.e. If Tom's answer is "oooooooooo" and the correct answer is "ooxxxxxxxx", Tom got 20 points.

John didn't know what the correct answer was. He has his own answer.

John looked at Tom's answer and Tom's score, and he wanted to know what the minimum possible score and the maximum possible score he could get..
Task

You are given three arguments:

    answerOfTom: Tom's answer. It's a string of length 10, contains only o or x.

    scoreOfTom: Tom's score. an integer that can be 0,10,20,...,100.

    answerOfJohn: John's answer. It's a string of length 10, contains only o or x.

Your result should be a 2-elements integer array/tuple: <minimum possible score of John>, <maximum possible score of John>

Still not understand the task? Look at the following example ;-)
Examples

For answerOfTom="oooooooooo", scoreOfTom=20, answerOfJohn="oooooooooo" the output should be 20,20

In this case, John's answer is same as Tom's, so his scores can only be 20.

For answerOfTom="oooooooooo", scoreOfTom=20, answerOfJohn="xxxxxxxxxx" the output should be 80,80

In this case, John's answer is just the opposite of Tom's, so his scores can only be 80.

For answerOfTom="oooooooooo", scoreOfTom=20, answerOfJohn="oooooxxxxx" the output should be 30,70

In this case, Tom's score is 20. It means two questions Tom answered correctly.

Let's think about some situations:

If the first question and second question Tom answered correctly, the whole correct answer may be "ooxxxxxxxx", John will get 70 points;

If the last question and second last question Tom answered correctly, the whole correct answer may be "xxxxxxxxoo", John will get 30 points;

If the 5th question and 6th question Tom answered correctly, the whole correct answer may be "xxxxooxxxx", John will get 50 points;

...and other situations...

So, John can get at least 30 points, at most 70 points.
Note

    Happy Coding ^_^

**Português**

John e Tom são alunos de Myjinxin.

Na sala de aula, Myjinxin costuma fazer 10 perguntas de julgamento, deixe os alunos escreverem a resposta. o representa certo e x representa errado. ou seja, se os alunos acharem que os 10 julgamentos estão corretos, sua resposta será "ooooooooo".

Tom sempre responde às perguntas antes de John. Em seguida, o professor dá uma nota ao Tom, cada matéria valendo 10 pontos. ou seja, se a resposta de Tom for "ooooooooo" e a resposta correta for "ooxxxxxxxx", Tom obteve 20 pontos.

John não sabia qual era a resposta correta. Ele tem sua própria resposta.

John olhou para a resposta e a pontuação de Tom e queria saber qual a pontuação mínima possível e a pontuação máxima possível que ele poderia obter.
Tarefa

Você recebe três argumentos:

     answerOfTom: resposta de Tom. É uma string de comprimento 10, contém apenas o ou x.

     scoreOfTom: pontuação de Tom. um número inteiro que pode ser 0,10,20,...,100.

     respostaOfJohn: resposta de John. É uma string de comprimento 10, contém apenas o ou x.

Seu resultado deve ser uma matriz/tupla inteira de 2 elementos: <pontuação mínima possível de John>, <pontuação máxima possível de John>

Ainda não entendeu a tarefa? Veja o exemplo a seguir ;-)
Exemplos

Para answerOfTom="oooooooooo", scoreOfTom=20, answerOfJohn="oooooooooo" a saída deve ser 20,20

Neste caso, a resposta de John é igual à de Tom, então sua pontuação só pode ser 20.

Para answerOfTom="oooooooooo", scoreOfTom=20, answerOfJohn="xxxxxxxxxx" a saída deve ser 80,80

Neste caso, a resposta de John é exatamente o oposto da de Tom, então sua pontuação só pode ser 80.

Para answerOfTom="oooooooooo", scoreOfTom=20, answerOfJohn="oooooxxxxx" a saída deve ser 30,70

Neste caso, a pontuação de Tom é 20. Significa duas perguntas que Tom respondeu corretamente.

Vamos pensar em algumas situações:

Se Tom respondeu corretamente a primeira e a segunda pergunta, toda a resposta correta pode ser "ooxxxxxxxx", John receberá 70 pontos;

Se a última pergunta e a penúltima pergunta Tom responderam corretamente, toda a resposta correta pode ser "xxxxxxxxoo", John receberá 30 pontos;

Se Tom respondeu corretamente a 5ª e 6ª questão, toda a resposta correta pode ser "xxxxooxxxx", John receberá 50 pontos;

...e outras situações...

Então, John pode conseguir no mínimo 30 pontos, no máximo 70 pontos.
Observação

     Boa codificação ^_^

