let shipName = prompt("Por favor, digite o nome da nave: ")
let choseOp= prompt("Deseja fazer uma dobra espacial? \n1-Sim \n2-Não")
let dobra=0

while(choseOp=="1"){
    alert("Dobra realizada com sucesso!")
    dobra++
    choseOp= prompt("Deseja fazer uma dobra espacial? \n1-Sim \n2-Não")   
}
alert("Contagem finalizada!\n A nave "+shipName+" realizou "+dobra+ " dobras")