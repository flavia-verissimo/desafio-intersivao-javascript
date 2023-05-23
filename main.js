// 1. Crie umscript que exiba a mensagem "Hello World!" em um alerta no navegador.
alert ('Hello world!')

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

const numberOne = 10
const numberTwo = 15

const sum = numberOne + numberTwo
alert(sum)

//3. Crie um script que declare uma variável e verifique se o seu valor é um número. se for, exiba a mensagem "É um número",
// caso contrário, exiba a mensagem "Não é um número".

const isNumber = 10

if(true) {
  alert("É um número")
} else {
  alert("Não é um número")
}

// 4. crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensgame "É uma string",
// caso contrário, exiba a mensagem "Não é uma string".

const isString = 'Isso é uma string'

if(typeof isString == 'string') {
  alert('É uma string')
} else {
  alert('Não é uma string')
}

// 5. Crie um script que declare uma variável e verifiqur se o seu valor é um booleano. Se for, exiba a mensagem
// "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

const isBooleano = true

if(typeof isBooleano == 'booleano') {
  alert('É um booleano')
} else {
  alert ('Não é um booleano')
}

// 6. Crie um script que declare duas variáveis e exiba o resulatado da subtração entre elas.
// 7. Crie um script que declare duas variáveis e exiba o resulatado da multiplicação entre elas.
// 8. Crie um script que declare duas variáveis e exiba o resultado da divisâo entre elas.

let firstNumber = prompt("Digite o primeiro número")
let secondNumber = prompt("Digite o segundo número")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const somar = firstNumber + secondNumber
const multi = firstNumber * secondNumber
const sub = firstNumber - secondNumber

alert('soma:' + somar)
alert('subtração: ' + sub)
alert('multiplicação: ' + multi)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par",
// caso contrário, exiba a mensagem "Não é um número par".

const isEvenNumber = 4

if(isEvenNumber % 2 == 0) {
  alert('É um número par')
} else {
  alert('Não é um número par')

}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar"
// caso contrário, exiba a mensagem "Não é um número ímpar".

const isOddNumber = 5

if(isOddNumber % 2 != 0) {
  alert('É um número ímpar')
} else {
  alert('Não é um número ímpar')
}


