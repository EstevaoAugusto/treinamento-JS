// string methods = allow you to manipulate and work
// with text (strings)

let userName = "BroCode"

console.log(userName.charAt(0)) //mostra que caractere possui no indice informado
console.log(userName.indexOf("o"))//mostra qual o indice da 1a aparição do caractere(s) informado(s)
console.log(userName.lastIndexOf("o"))//mostra o indice da ultima paraição do subconjunto de strings informados

console.log(userName.length) // tamanho da string. 
//tamanho da string considera o espaço como caractere
console.log(userName.trim())// recorta o espaço de uma string
console.log(userName.toLowerCase())
console.log(userName.toUpperCase())
console.log(userName.repeat(3))
console.log(userName.startsWith("Br"))
console.log(userName.startsWith("sa"))

console.log(userName.endsWith(userName))

let phoneNumber = "123-456-7890"
let phoneNumberPaddedEnd = phoneNumber.padEnd(15,"0")
let phoneNumberPaddedStart = phoneNumber.padStart(15,"0")
let phoneNumberReplaced = phoneNumber.replaceAll("-", "/")
console.log(phoneNumberReplaced)
console.log(phoneNumberPaddedStart)
console.log(phoneNumberPaddedEnd)