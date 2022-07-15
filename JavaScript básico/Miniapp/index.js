const moment = require("./moment")

let ddpe= prompt("Digite a data de partida (formato DD/MM/AAAA)")

let dd= moment(ddpe, "DD/MM/AAAA")

let today= moment()

let dDiff = today - dd

let chooseOp = prompt("Como gostaria de exibir o tempo de partida? \n1-Segundos \n2-Minutos \n3-Horas \n4-Dias")

if(chooseOp == 1){
    let seconds= Math.round(dDiff /1000)
    alert("Tempo de vôo: "+seconds +"segundos")
} else if(chooseOp ==2){
    let minutes = Math.round(dDiff/1000/60)
    alert("Tempo de vôo: "+minutes+ "minutos")
} else if(chooseOp==3){
    let hours= Math.round(dDiff/1000/3600)
    alert("Tempo de vôo: "+hours+ "horas")
}else if(chooseOp==4){
    let days= Math.round(dDiff/1000/3600/24)
    alert("Tempo de vôo: "+days+ "dias")
}else{
    alert("Opção inválida!")
}