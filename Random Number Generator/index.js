// RANDOM NUMBER GENERATOR

const myButton = document.getElementById("myButton")
const label1 = document.getElementById("myLabel1")
const label2 = document.getElementById("myLabel2")
const label3 = document.getElementById("myLabel3")
const min = 1
const max = 6
let randomNum1, randomNum2, randomNum3

myButton.onclick = function(){ //Gerador de numero aleatorio
    //gera valores entre 1 a 6
    
    randomNum1 = Math.floor(Math.random() * max) + min
    randomNum2 = Math.floor(Math.random() * max) + min
    randomNum3 = Math.floor(Math.random() * max) + min

    label1.textContent = randomNum1
    label2.textContent = randomNum2
    label3.textContent = randomNum3
}