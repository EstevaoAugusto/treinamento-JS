//Programa contador

const decreaseBtn = document.getElementById("decreaseBtn")
const resetBtn = document.getElementById("resetBtn")
const increaseBtn = document.getElementById("increaseBtn")
const countLabel = document.getElementById("countLabel")
let count = 0


increaseBtn.onclick = function(){ //aumentar o valor do contador em 1
    count++;
    countLabel.textContent = count
}

decreaseBtn.onclick = function(){ //diminui o valor do contador em 1
    count--;
    countLabel.textContent = count
}

resetBtn.onclick = function(){//reseta o valor do contador
    count = 0
    countLabel.textContent = count
}