// while loop = repeat some code WHILE some condition is true

//let username

/*
while(username === "" || username === null){
    username = window.prompt("Digite seu nome: ")
}*/

/*
do{
    username = window.prompt("Digite seu nome: ")
}while(username === "" || username === null)

console.log(`Hello ${username}`)
*/

let loggedIn = false
let username, password

while(!loggedIn){
    username = window.prompt("Digite o nome de usuário")
    password = window.prompt("Digite sua senha")

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true
        console.log("You are logged in!")
    } else {
        console.log("Invalid credentials! Please try again")
    }
}