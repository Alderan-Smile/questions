# Enunciado 1

> Estás subiendo una escalera de N peldaños. En cada momento, puedes subir 1 o 2 peldaños. ¿En cuántas formas diferentes puedes subir las escalera?

# Razonamiento

> El puzzle tiene una alta dificultad ya que ocupa un tipo de problema semejante a la secuencia de fibonacci el cual suma el numero anterior con el numero que le sigue.

En este caso la secuencia se refiere cuantas formas existe para subir una escalera de N peldaños con un maximo de 2 peldaños para subir y un minimo de 1. Con esta informacion podemos inferir que una escalera con N como cantidad de peldaños:

- Si N<C siendo C =< 3 entonces N<C = N=C formas de subir una escalera

- Si N>3 Entonces el resultado sera igual a la suma de las secuencias anteriores F(N)=F(N-1)+F(N-2)

Un ejemplo de esto seria:

F(2)=2
F(3)=3

F(4) = F(3)+F(2)
X = 3+2
X = 5
F(4) = 5

F(5) = F(4) + F(3)
X = 5 + 3
X = 8
F(5) = 8

En conclusion, para poder encontrar la solucion a este problema, primeramente se debe de tener conociemiento de la sucesión de fibonacci.