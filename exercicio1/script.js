// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.

let ask = prompt("Deseja pedir uma coxinha ? \n Responda sim ou não !")
let conta = null
let qntcx = null

while ( ask === "sim" ){
conta += 2.50
qntcx++
ask = prompt("Deseja pedir mais uma coxinha ? \n Responda sim ou não !")
} 
console.log(`Você pediu ${qntcx++} coxinhas, o valor final é ${conta++}`)