/* string slicing = creating a substring 
                    from a portion of another string


                    string.slice(start, end)
*/

/*
const fullName = "Estevão Augustus da Francisco Silva"
//const fullName = "Estevão Augusto da Fonseca Santos"

//console.log(fullName.slice(0, 14)) //indice final é exclusivo

//let firstName = fullName.slice(0,15) 
//let lastName = fullName.slice(19)  //indice final é opcional
// se voce colocar o indice inicial, ele pegara todos os caracteres
// em seguida a partir dele.

//let firstChar = fullName.slice(0,1)
//let lastChar = fullName.slice(-1) // valores negativos rotacionam na string
// tipo se você colocar -1, voce deve chegar na posicao tamanho_da_string - 1
// logo em seguida ele pega todos os caracteres a partir do indice atual

let firstName = fullName.slice(0, fullName.indexOf(" "))
firstName = firstName + " " + fullName.slice(firstName.length + 1, fullName.indexOf(" ", firstName.length + 1))
let lastName = fullName.slice(firstName.length + 1)


console.log(firstName)
console.log(lastName)
//console.log(firstChar)
//console.log(lastChar)
*/

const email = "veridico@gmeio.com"

let username = email.slice(0, email.indexOf("@"))
let extension = email.slice(email.indexOf("@") + 1)

console.log(username)
console.log(extension)